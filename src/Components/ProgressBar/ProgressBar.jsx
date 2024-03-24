import React, { useEffect, useState } from "react";
import { Absolute } from "../Tags/Tags";
import { Tooltip } from "react-tooltip";
import ReactDOMServer from "react-dom/server";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { AccountLayout, TOKEN_PROGRAM_ID, getAccount, getMint } from "@solana/spl-token";
import numeral from "numeral";
const ProgressBar = ({ className }) => {
  const [filled, setFilled] = useState(0);
  const total = import.meta.env.VITE_TOTAL_TOKEN;
  const PPLONPerSolRate = import.meta.env.VITE_PEPOLEON_PER_SOL_RATE;
  useEffect(() => {
    async function getTokenBalance() {
      // Connect to cluster
      const connection = new Connection(import.meta.env.VITE_RPC);
      let tokenMintAddress = new PublicKey(import.meta.env.VITE_TOKEN_ADDRESS);
      let holderPublicKey = new PublicKey(import.meta.env.VITE_TOKEN_OWNER_WALLET);

      const tokenAccounts = await connection.getTokenAccountsByOwner(holderPublicKey, {
        programId: TOKEN_PROGRAM_ID,
      });
      tokenAccounts.value.forEach((tokenAccount) => {
        const accountData = AccountLayout.decode(tokenAccount.account.data);
        const mintAddress = new PublicKey(accountData.mint);
        console.log(accountData);
        if (mintAddress.equals(tokenMintAddress)) {
          const left = Number(accountData.amount) / 10 ** import.meta.env.VITE_DECIMALS;
          const filled = total - left;
          setFilled(filled);
        }
      });
    }
    getTokenBalance();
  }, []);

  return (
    <>
      <div className={className}>
        <div className="relative">
          <div className="relative  w-full bg-primary-1000 rounded-full overflow-hidden h-5 xl:h-8">
            <div>
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
                  <div className="flex flex-col items-center justify-center">
                    <div>{numeral(filled).format(0, 0)} PPLON</div>
                    <div>{(filled / PPLONPerSolRate).toFixed(2)} SOL</div>
                  </div>
                )}
                data-tooltip-place="bottom-start"
                className="flex relative h-5 xl:h-8 px-3 text-sm flex-col text-primary-1000 font-semibold drop-shadow justify-center rounded-full overflow-hidden bar-pep  w-full whitespace-nowrap bg-primary-500 "
                style={{ width: `${(filled / total) * 100}%` }}
              ></div>
            </div>
            <Absolute className="right-3 text-sm bottom-0 top-0 flex items-center justify-center">{((filled / total) * 100).toFixed(2)}%</Absolute>
          </div>
            <img src="./img/hourse.png" className="h-10   lg:h-20 z-10 -left-2 lg:-left-10 absolute -top-2" />
          <Absolute className="right-3 text-sm bottom-0 top-14 flex items-center justify-center">Total : {numeral(total).format(0, 0)}</Absolute>
        </div>
      </div>
      <Tooltip style={{ backgroundColor: "#5ED820", color: "#102c07", opacity: 1, fontWeight: "semibold" }} id="my-tooltip" isOpen={true} />
    </>
  );
};

export default ProgressBar;
