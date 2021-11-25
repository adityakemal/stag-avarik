import { useState, useEffect } from "react";
import {
  getDepositsOf,
  getTotalRewards,
} from "components/utils/staking-contract";
import {
  getTokenURI,
} from "components/utils/nft-contract";
import fetcher from 'components/utils/fetcher';

const useStaking = (account) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stakedTokens, setStakedTokens] = useState([]);
  const [earned, setEarned] = useState(0);

  const refresh = async (account) => {
    setIsLoading(true);
    try {
      const _stakedTokens = await getDepositsOf(account);
      const _earned = await getTotalRewards(account, _stakedTokens);
      const _tokenURIs = await Promise.all(
        _stakedTokens.map((val) => getTokenURI(val))
      )
      const metadatas = await Promise.all(
        _tokenURIs.map(fetcher.get)
      ).catch((error) => {
        console.log(error);
        return _tokenURIs.map(() => '');
      })

      const tokens = _stakedTokens.map((val, i) => ({ id: val, img: metadatas[i].image }));
      setStakedTokens(tokens);
      setEarned(_earned);
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
    stakedTokens,
    earned,
    refresh,
  }
};

export default useStaking;
