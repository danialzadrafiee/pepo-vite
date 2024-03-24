import "./App.scss";
import React, { useCallback, useEffect, useMemo } from "react";
import { ConnectionProvider, WalletProvider, useLocalStorage, useWallet } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import { LedgerWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import Menu from "@/Components/Menu/Menu";
// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import GatewayIndex from "./Pages/Gateway/GatewayIndex/GatewayIndex";
import DashboardIndex from "./Pages/Dashboard/DashboardIndex/DashboardIndex";
import { MainContextProvider } from "./Context";

function WalletProviderErrorCallBack(error) {
  console.error("ok");
  console.error(error);
}
const App = () => {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint =
    "https://solana-mainnet.api.syndica.io/api-token/2hpkgDN3ojB497jyBmYWybReuuay9TBGy1wofkuPgvPesTTLUndVqPqPJ5pxGz4otSKd4YUJytccVp1cMXETFQHARkbfxKi1wBrvZYz3MCWs1pX7P7ZfhdzJBDk5TG5x1NQqVmNQya592VmLEM9FgVHsXLrsccGooSkYNYXTrezNm5aRL8PsoS1UHGYcqhKjSq21MHhdQZKLYLZiXiz4bdQDPdQRG2y22xHbwTFXNSGgBD6NonoSyeGXtoBNnhg432ggmJDMn6zV6gQHRVC3rdHxCmC1gB6CqzqfSqVL7HUdGfabVnUD1Tcw6zNnVjXfpc7cnfEHBzbr7rCmAyeYYKZd6MJecun7L2nQkpBgR9gTLGEYpJj6y5tDca78dsWexscFmDPKervHwNY8qUAfi2Fp79rBE7SDMsoWwtjdpj3sTVWYVMJ5vQcTbbVacKbqFxH8PxLLDWTjofd5pfKKgHmEbJRfRajX21hQPAgmixCtiBhHqwEYraeuy5y8p";
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new TorusWalletAdapter(), new LedgerWalletAdapter()], [network]);

  const onError = useCallback((error) => {
    WalletProviderErrorCallBack(error);
  }, []);

  return (
    <MainContextProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider onError={onError} wallets={wallets} autoConnect={false}>
          <WalletModalProvider>
            <Panel />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </MainContextProvider>
  );
};
export default App;

const Panel = () => {
  const { publicKey, sendTransaction } = useWallet();
  return (
    <>
      <Menu />
      <div>{publicKey ? <DashboardIndex /> : <GatewayIndex />}</div>
    </>
  );
};
