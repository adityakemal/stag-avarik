import { InfuraProvider } from "@ethersproject/providers";

const NETWORK = process.env.NEXT_PUBLIC_NETWORK;
const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;

// Get current block number
export const getBlockNumber = async () => {
  const provider = new InfuraProvider(NETWORK, INFURA_ID);

  const response = await provider.getBlockNumber();
  return Number(response);
};