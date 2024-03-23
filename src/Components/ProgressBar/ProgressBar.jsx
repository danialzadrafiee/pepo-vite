import React, { useEffect, useState } from "react";
import { Absolute } from "../Tags/Tags";
import { Tooltip } from "react-tooltip";
import ReactDOMServer from "react-dom/server";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { AccountLayout, TOKEN_PROGRAM_ID, getAccount, getMint } from "@solana/spl-token";
import numeral from "numeral";
const ProgressBar = ({ className }) => {
  const [filled, setFilled] = useState(0);
  const total = 1000000000;
  const PPLONPerSolRate = 1000000000;
  useEffect(() => {
    async function getTokenBalance() {
      // Connect to cluster
      const connection = new Connection("https://api.devnet.solana.com");
      let tokenMintAddress = new PublicKey("FeHG7iZzu6LNdke2Yt6NSDRppNKwgRKBUs7fFJTPxyfj");
      let holderPublicKey = new PublicKey("EkS8ruodTS1NAhGXN4t4cMUbQ6p4UPr5tTV25oyqwc4D");

      const tokenAccounts = await connection.getTokenAccountsByOwner(holderPublicKey, {
        programId: TOKEN_PROGRAM_ID,
      });
      tokenAccounts.value.forEach((tokenAccount) => {
        const accountData = AccountLayout.decode(tokenAccount.account.data);
        const mintAddress = new PublicKey(accountData.mint);
        if (mintAddress.equals(tokenMintAddress)) {
          const left = Number(accountData.amount) / 1000000000;
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
              data-tooltip-place="bottom-end"
              className="flex h-5 px-3 text-sm flex-col text-primary-1000 font-semibold drop-shadow justify-center rounded-full overflow-hidden bar-pep  w-full whitespace-nowrap bg-primary-500 "
              style={{ width: `${(filled / total) * 100}%` }}
            ></div>
          </div>
          <Absolute className="right-3 text-sm bottom-0 top-0 flex items-center justify-center">{((filled / total) * 100).toFixed(2)}%</Absolute>
        </div>
      </div>
      <Tooltip style={{ backgroundColor: "#5ED820", color: "#102c07", opacity: 1, fontWeight: "semibold" }} id="my-tooltip" isOpen={true} />
    </>
  );
};

export default ProgressBar;
