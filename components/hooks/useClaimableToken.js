import { useState, useEffect } from "react";
import { formatEther } from "@ethersproject/units";
import {
  getBlockNumber,
} from "components/utils/provider";
const STARTING_BLOCK = process.env.NEXT_PUBLIC_CLAIMABLE_TOKEN_STARTING_BLOCK;
const RATE = process.env.NEXT_PUBLIC_CLAIMABLE_TOKEN_RATE;

const useClaimableToken = (nftQty) => {
  const [isLoading, setIsLoading] = useState(false);
  const [earned, setEarned] = useState(0);

  const refresh = async (nftQty) => {
    setIsLoading(true);
    try {
      const currentBlockNumber = await getBlockNumber();
      const blockDiff = currentBlockNumber - STARTING_BLOCK;
      const rate = Number(formatEther(RATE))
      setEarned(blockDiff * rate * nftQty);
    } catch (error) {
      console.error(error);
      //
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (nftQty) {
      refresh(nftQty);
    }
  }, [nftQty]);

  return {
    isLoading,
    earned,
    refresh,
  }
};

export default useClaimableToken;
