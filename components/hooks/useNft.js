import { useState, useEffect } from "react";
import {
  getBalanceOf,
  getTokenOfOwnerByIndex,
  getTokenURI,
  getIsApprovedForAll,
} from "components/utils/nft-contract";
import fetcher from 'components/utils/fetcher';
import { replaceIpfsOrigin } from "components/utils/helpers";

const useNft = (account) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tokens, setTokens] = useState([]);
  const [isApprovedForAll, setIsApprovedForAll] = useState([]);

  const refresh = async (account) => {
    setIsLoading(true);
    try {
      const quantity = await getBalanceOf(account);

      const _tokenIds = [];
      for (let i = 0; i < quantity; i++) {
        const _tokenId = await getTokenOfOwnerByIndex(account, i);
        _tokenIds.push(_tokenId);
      }

      /** no need metadata */

      // const _tokenURIs = await Promise.all(
      //   _tokenIds.map(getTokenURI)
      // )

      // let metadatas = _tokenURIs.map(() => "");
      // try {
      //   metadatas = await Promise.all(
      //     _tokenURIs.map(item => fetcher.get(replaceIpfsOrigin(item)))
      //   )
      // } catch (err) {
      //   console.log("err metadata", err)
      // }

      // const tokens = _tokenIds.map((val, i) => ({ id: val, img: metadatas[i].image }));
      const tokens = _tokenIds.map((val, i) => ({ id: val }));
      setTokens(tokens);

      const _isApprovedForAll = await getIsApprovedForAll(account);
      setIsApprovedForAll(_isApprovedForAll);
    } catch (error) {
      console.log("err 1", error);
      //
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (account) {
      refresh(account);
    }
  }, [account]);

  return {
    isLoading,
    tokens,
    isApprovedForAll,
    refresh,
  }
};

export default useNft;
