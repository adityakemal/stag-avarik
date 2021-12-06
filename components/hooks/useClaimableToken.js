import { useState, useEffect } from "react";
import { formatEther } from "@ethersproject/units";
import fetcher from 'components/utils/fetcher';
import { computeEarning } from 'components/utils/helpers';
import {
  getBlockNumber,
} from "components/utils/provider";
const STARTING_BLOCK = Number(process.env.NEXT_PUBLIC_CLAIMABLE_TOKEN_STARTING_BLOCK);
const RATE = process.env.NEXT_PUBLIC_CLAIMABLE_TOKEN_RATE;
const NFT_ADDRESS = process.env.NEXT_PUBLIC_NFT_ADDRESS;
const ETHERSCAN_API = process.env.NEXT_PUBLIC_ETHERSCAN_API;
const ETHERSCAN_APIKEY = process.env.NEXT_PUBLIC_ETHERSCAN_APIKEY;
const blockPerDay = 6000;

const useClaimableToken = (nftQty, address) => {
  const [isLoading, setIsLoading] = useState(false);
  const [earned, setEarned] = useState(0);
  const [earningRate, setEarningRate] = useState(0);

  const refresh = async (nftQty) => {
    setIsLoading(true);
    try {
      const currentBlockNumber = await getBlockNumber();
      const rate = Number(formatEther(RATE));
      const { data: { result } } = await fetcher.get(
        ETHERSCAN_API,
        {
          params: {
            module: 'account',
            action: 'tokennfttx',
            contractaddress: NFT_ADDRESS,
            address,
            startblock: 0,
            endblock: currentBlockNumber,
            sort: 'asc',
            apikey: ETHERSCAN_APIKEY,
          }
        }
      );
      const earning = computeEarning({
        results: result,
        STARTING_BLOCK,
        ENDING_BLOCK: currentBlockNumber,
        RATE: rate,
        to: address
      });
      setEarned(earning);
      setEarningRate(nftQty * rate * blockPerDay);
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
    earningRate,
    earned,
    refresh,
  }
};

export default useClaimableToken;
