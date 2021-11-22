import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 12000;
const CHAIN_ID = +process.env.NEXT_PUBLIC_CHAIN_ID;
const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;

export const injected = new InjectedConnector({
  supportedChainIds: [CHAIN_ID],
});

export const walletconnect = new WalletConnectConnector({
  infuraId: INFURA_ID,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
