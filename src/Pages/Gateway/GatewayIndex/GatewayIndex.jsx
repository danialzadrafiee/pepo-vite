import ProgressBar from "@/Components/ProgressBar/ProgressBar";
import { Absolute, Container, Flex, Grid, Hero, Logo, Relative, Text, Inside } from "@/Components/Tags/Tags";
import { List, TelegramLogo, TwitterLogo, X } from "@phosphor-icons/react";
import "react-tooltip/dist/react-tooltip.css";
import IconButton from "@/Components/IconButton/IconButton";
import { useMainContext } from "@/Context";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import {} from "../../../Components/Tags/Tags";
import numeral from "numeral";

const DepositModal = ({ isModalHidden, setIsModalHidden }) => {
  return (
    <div onClick={() => setIsModalHidden(true)} className={`inset-0 fixed z-20 bg-black/70 flex items-center justify-center ${isModalHidden && "hidden"}`}>
      <Inside onClick={(e) => e.stopPropagation()} className="max-w-xs rounded p-5 bg-pep">
        <header className="flex justify-end w-full">
          <div onClick={() => setIsModalHidden(true)} className="rounded-full border bg-black/60 border-primary-600 p-1 text-primary-600">
            <X />
          </div>
        </header>
        <Flex className="flex-col items-center justify-center">
          <div className="text-center text mt-2 pb-2">Deposit Address</div>
          <div className="bg-white rounded p-2">
            <QRCode value="hey" size={200} />
          </div>
          <div className="text-center text-sm break-all mt-2">{import.meta.env.VITE_TOKEN_OWNER_WALLET}</div>
          <div className="rounded p-2 bg-primary-950 text-sm mt-2">1Sol = {numeral(import.meta.env.VITE_PEPOLEON_PER_SOL_RATE).format("0,0")} $PPOL</div>
          <small className="text-center text-primary-500 mt-2">Your will recive your tokens immediately after deposist </small>
        </Flex>
      </Inside>
    </div>
  );
};

const GatewayIndex = () => {
  const { setIsMenuOpen } = useMainContext(false);
  const { publicKey, sendTransaction } = useWallet();
  const [isModalHidden, setIsModalHidden] = useState(true);

  return (
    <>
      <DepositModal {...{ isModalHidden, setIsModalHidden }} />
      <Container className="p-5 xl:min-h-screen  min-h-dvh flex bg-pep ">
        <div className="md:max-w-md 2xl:scale-125 origin-top flex flex-col justify-between h-full md:max-h-[800px] mx-auto">
          <header>
            <Flex className="items-center justify-between">
              <Flex className="gap-2 items-center">
                <a href="https://t.me/PepoleonPortal" target="_blank">
                  <IconButton>
                    <TelegramLogo size={24} weight="fill" />
                  </IconButton>
                </a>
                <a href="https://twitter.com/pepoleononsol" target="_blank">
                  <IconButton>
                    <TwitterLogo size={24} weight="fill" />
                  </IconButton>
                </a>
              </Flex>
              <IconButton onClick={() => setIsMenuOpen(true)}>
                <List size={24} weight="fill" />
              </IconButton>
            </Flex>
          </header>
          <Hero>
            <Grid className="place-items-center px-4">
              <Logo>
                <img src="./img/logo-xl.png" alt="Pepoleon Logo"></img>
              </Logo>
              <h1 className="text-6xl font-impact text-pep">Pepoleon</h1>
              <h2 className="text-2xl font-impact text-pep mt-1">Presale</h2>
              <Text className="text-center xl:text-base text-xs mt-2">
                The Pepoleon Presale Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus optio laborum quasin.{" "}
                <strong className="text-primary-400">You recive your tokens immediately after deposit</strong>
              </Text>
              <div className="w-full">
                <ProgressBar className="w-full mt-4"></ProgressBar>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mt-24">
                <div className="connect">
                  <WalletMultiButton />
                </div>
              </div>
              <div onClick={() => setIsModalHidden(false)} className="mt-2 cursor-pointer text-sm">
                Deposit Manualy
              </div>
            </Grid>
          </Hero>
          {/* <footer className=" bottom-0">
            <Flex className="gap-6 opacity-80 hover:opacity-100 py-4 text-xs">
              <div>Terms</div>
              <div>Support</div>
            </Flex>
          </footer> */}
        </div>
      </Container>
    </>
  );
};
export default GatewayIndex;
