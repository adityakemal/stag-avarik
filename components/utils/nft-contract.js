import { Contract } from "@ethersproject/contracts";
import { InfuraProvider } from "@ethersproject/providers";
import NFT_ABI from "components/utils/AvarikSaga.json";

const NETWORK = process.env.NEXT_PUBLIC_NETWORK;
const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;
const NFT_ADDRESS = process.env.NEXT_PUBLIC_NFT_ADDRESS;
const STAKING_ADDRESS = process.env.NEXT_PUBLIC_STAKING_ADDRESS;

// Get balance of NFTs for account
export const getBalanceOf = async (account) => {
  const provider = new InfuraProvider(NETWORK, INFURA_ID);
  const contract = new Contract(NFT_ADDRESS, NFT_ABI, provider);

  const response = await contract.balanceOf(account);
  return Number(response);
};

// Get the token id of owner based of index
export const getTokenOfOwnerByIndex = async (account, index) => {
  const provider = new InfuraProvider(NETWORK, INFURA_ID);
  const contract = new Contract(NFT_ADDRESS, NFT_ABI, provider);

  const response = await contract.tokenOfOwnerByIndex(account, index);
  return Number(response);
};

// Get the token URI
export const getTokenURI = async (tokenId) => {
  const provider = new InfuraProvider(NETWORK, INFURA_ID);
  const contract = new Contract(NFT_ADDRESS, NFT_ABI, provider);

  return contract.tokenURI(tokenId);
};

// Check if it is approve for all
export const getIsApprovedForAll = async (owner) => {
  const provider = new InfuraProvider(NETWORK, INFURA_ID);
  const contract = new Contract(NFT_ADDRESS, NFT_ABI, provider);

  return contract.isApprovedForAll(owner, STAKING_ADDRESS);
};

// Mint during public sales
export const setApprovalForAll = async (library) => {
  const contract = new Contract(NFT_ADDRESS, NFT_ABI, library.getSigner());

  return contract.setApprovalForAll(STAKING_ADDRESS, true);
};