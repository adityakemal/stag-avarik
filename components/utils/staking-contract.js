import { formatEther } from "@ethersproject/units";
import { Contract } from "@ethersproject/contracts";
import { InfuraProvider } from "@ethersproject/providers";
import STAKING_ABI from "components/utils/VortemStaking.json";

const NETWORK = process.env.NEXT_PUBLIC_NETWORK;
const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;
const STAKING_ADDRESS = process.env.NEXT_PUBLIC_STAKING_ADDRESS;

// Get deposited NFTs for account
export const getDepositsOf = async (account) => {
  const provider = new InfuraProvider(NETWORK, INFURA_ID);
  const contract = new Contract(STAKING_ADDRESS, STAKING_ABI, provider);

  const response = await contract.depositsOf(account);
  return response.map(Number)
};

// Get deposited NFTs for account
export const getTotalRewards = async (account, tokenIds) => {
  const provider = new InfuraProvider(NETWORK, INFURA_ID);
  const contract = new Contract(STAKING_ADDRESS, STAKING_ABI, provider);

  const response = await contract.calculateRewards(account, tokenIds);
  return response
    .map(formatEther)
    .map(Number)
    .reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0)
};

// Deposit multiple token id
export const deposit = async (library, tokenIds) => {
  const contract = new Contract(STAKING_ADDRESS, STAKING_ABI, library.getSigner());

  return contract.deposit(tokenIds);
};

// Withdraw multiple token id
export const withdraw = async (library, tokenIds) => {
  const contract = new Contract(STAKING_ADDRESS, STAKING_ABI, library.getSigner());

  return contract.withdraw(tokenIds);
};

// Claim rewards of multiple token id
export const claimRewards = async (library, tokenIds) => {
  const contract = new Contract(STAKING_ADDRESS, STAKING_ABI, library.getSigner());

  return contract.claimRewards(tokenIds);
};