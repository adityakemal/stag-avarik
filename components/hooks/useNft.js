import { useState, useEffect } from "react";
import {
  getBalanceOf,
  getTokenOfOwnerByIndex,
  getTokenURI,
  getIsApprovedForAll,
} from "components/utils/nft-contract";
import fetcher from 'components/utils/fetcher';

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

      const _tokenURIs = await Promise.all(
        _tokenIds.map(getTokenURI)
      )
      const metadatas = await Promise.all(
        _tokenURIs.map(fetcher.get)
      ).catch((error) => {
        console.log(error);
        return _tokenURIs.map(() => '');
      })

      const tokens = _tokenIds.map((val, i) => ({ id: val, img: metadatas[i].image }));
      setTokens(tokens);

      const _isApprovedForAll = await getIsApprovedForAll(account);
      setIsApprovedForAll(_isApprovedForAll);
    } catch (error) {
      console.error(error);
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
