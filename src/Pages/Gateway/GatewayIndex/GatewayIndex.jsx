import ProgressBar from "@/Components/ProgressBar/ProgressBar";
import { Absolute, Container, Flex, Grid, Hero, Logo, Relative, Text, Inside } from "@/Components/Tags/Tags";
import { List, Pause, Play, TelegramLogo, TwitterLogo, X } from "@phosphor-icons/react";
import "react-tooltip/dist/react-tooltip.css";
import IconButton from "@/Components/IconButton/IconButton";
import { useMainContext } from "@/Context";
import QRCode from "react-qr-code";
import { useEffect, useRef, useState } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const playAudio = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play().catch((error) => console.error("Error attempting to play audio:", error));
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <div className="bg-pep">
        <DepositModal {...{ isModalHidden, setIsModalHidden }} />
        <Container id="presale" className="p-5 xl:py-10  xl:min-h-min xl:pb-36  min-h-dvh flex  ">
          <div className="xl:max-w-4xl  2xl:scale-125 origin-top flex flex-col justify-between h-full md:max-h-[800px] mx-auto">
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
                <Logo className="flex items-center justify-center flex-col">
                  <img src="./img/logo-xl.png" className="lg:w-[240px]" alt="Pepoleon Logo"></img>
                  <button className={"rounded-full text-primary-600 -mt-8 p-2 bg-primary-1000 border border-primary-600"} onClick={playAudio}>
                    {!isPlaying && <Play size={16} weight="fill" />}
                    {isPlaying && <Pause size={16} weight="fill" />}
                  </button>
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
            <audio ref={audioRef} src="/nothing.mp3"></audio>

            {/* <footer className=" bottom-0">
            <Flex className="gap-6 opacity-80 hover:opacity-100 py-4 text-xs">
              <div>Terms</div>
              <div>Support</div>
            </Flex>
          </footer> */}
          </div>
        </Container>

        <Container id="roadmap" className="  xl:py-10 -mt-2  flex ">
          <div className="flex lg:max-w-4xl mx-auto w-full flex-col">
            <div className="w-full flex mt-5 items-center justify-between ">
              <img src="./img/hourse.png" className="w-[160px]  relative lg:w-[250px]" />
              <div className="text-xs lg:text-xl font-bold bold w-full flex items-center justify-center">About</div>
            </div>
            <div className="bg-black/40 p-4 h-64 lg:h-max overflow-auto">
              <div className="bg-black/50 rounded p-2">
                <div className="text-xs lg:text-base">
                  The Pepoleon Army: Meme Conquest Awaits The internet is drowning in normie memes. Bland, uninspired, and utterly forgettable. The dream of a true Meme Empire fades without a
                  memeperor. But fear not, for Pepoleon has arrived! We, the Pepoleon Army, are tired of these pretenders. We yearn for a leader with a strategic mind, a bicorne that demands respect,
                  and the undeniable swagger of a true memperor. Join us, and together we shall: Wage war on the normies: No more recycled formats, no more uninspired rehashes. We will conquer the
                  memes with fresh LOLs and originality. Build a Meme Empire: From the dankest corners of Reddit to the fleeting glory of Twitter trends, our dominion shall spread. We will leave other
                  meme coins trembling in our wake. Moon with the Power of Laughter: Forget Lambos. We'll be soaring through the digital stratosphere, fueled by the unbridled joy of a perfectly
                  executed meme. We'll tweet, we'll meme, we'll moon. Are you ready to make Meme Nation truly chad again? Then enlist in the Pepoleon Army today!
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container id="tokenomics" className="  xl:py-10 pb-10 -mt-2 flex  ">
          <div className="flex lg:max-w-4xl mx-auto w-full flex-col">
            <div className="w-full flex mt-10 items-center justify-between ">
              <div className="text-lg pr-5 w-full items-center justify-center flex font-bold ">Tokenomics</div>
              <img src="./img/tok.png" className="  w-[160px] lg:w-[250px]" />
            </div>
            <Grid className="grid-cols-2 p-8 bg-black/50 gap-4">
              <div className="rounded bg-black/70 border p-4 flex flex-col border-primary-500 items-center justify-center">
                <span>TOTAL SUPPLY</span>
                <span>690B</span>
              </div>
              <div className="rounded bg-black/70 border p-4 flex flex-col border-primary-500 items-center justify-center">
                <span>PRESALE</span>
                <span>379.5B</span>
              </div>
              <div className="rounded bg-black/70 border p-4 flex flex-col border-primary-500 items-center justify-center">
                <span>LP BURNE</span>
                <span>AT LAUNCH</span>
              </div>
              <div className="rounded bg-black/70 border p-4 flex flex-col border-primary-500 items-center justify-center">
                <span>OWNERSHIP</span>
                <span>REVOKE</span>
              </div>
            </Grid>
          </div>
        </Container>

        <Container id="roadmap" className="  xl:py-10 -mt-2  flex ">
          <div className="flex lg:max-w-4xl mx-auto w-full flex-col">
            <div className="w-full flex mt-5 items-center justify-between ">
              <img src="./img/rod.png" className="w-[160px] lg:w-[250px]" />
              <div className="text-xs lg:text-base pr-5">Remember, gentlemen, the corpse of an enemy always smells sweet.</div>
            </div>
            <div className="bg-black/40 p-4 h-64 lg:h-max overflow-auto">
              <div className="bg-black/50 rounded p-2">
                <h2 className="font-semibold lg:text-lg">Goal</h2>
                <div className="text-xs lg:text-base">
                  Pepoleon Ponaparte stands at the head of his great army, the edge of his sword thirstier for blood than a shark. Oh, my army, hurry up so we can make the meme world ours.
                </div>
                <div className="text-xs lg:text-base mt-5 ">
                  <h2 className="font-semibold lg:text-lg text-base">Roadmap</h2>

                  <ul className="space-y-3 ">
                    <li>
                      1. Preparing: We're going to start with a presale. We've designed a user-friendly website for early investors. You will connect your wallet with just one click, enter your
                      amount, touch the buy button, and you're done, PPLON tokens are in your wallet.
                    </li>
                    <li>
                      2. Networking: Community is the main value of Pepoleon. During the presale, Pepoleon's plan is to save a part of the attracted budget for the liquid ity pool and return another
                      part to the media to expand the commun ity with advertising and marketing.
                    </li>
                    <li>3. Listing: After the presale, Pepoleon will be listed on "raydium.io".</li>
                    <li>4. Following the initial listing, we plan to list our base pair on Uniswap and other mainstream DEXes.</li>
                    <li>5. Trust Building: We will list Pepoleon on trusted services like CMC and CoinGecko.</li>
                    <li>6. Dynamic Advertising: During the Dex, we will continue our social media advertising campaigns with rewards and airdrops for the community.</li>
                    <li>7. Additional Features: Our dev team is working on an NFT marketplace and additional Dev Tools right now. We will launch them during the Dex stage.</li>
                    <li>8. Central Listing: We are negotiating with different third parties. Our plan is to list Pepoleon on major CEXes as soon as possible.</li>
                    <li>9. Competition: Our final goal is to become the largest Meme coin community. We will keep up our competition until Pepoleon conquer all meme coins.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default GatewayIndex;
