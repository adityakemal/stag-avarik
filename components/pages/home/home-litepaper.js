import React from "react";

import { useScrollAnim } from "components/hooks/hooks";

const HomeLitePaper = () => {
  const [trigger, anim] = useScrollAnim();

  return (
    <div className="sc-home-litepaper pt-main" id="litepaper" ref={trigger}>
      <div className="container">
        <div className={`heading ${anim(1)}`}>
          <h2>Lite Paper</h2>
        </div>
        <div className={`box ${anim(2)}`}>
          <div className="box-inner">
            <div className="content">
              <p>
                Immerse yourself in the medieval world of Avarik Saga, a
                metaverse where blockchain-based game converge with art in a
                creative space community. Uncover endless possibilities as you
                journey in this war-ridden realm with 8,888 generative personas
                of loyal Knights, crafty Archers, and arcane Wizards in 4 novel
                factions and future realms to come.
              </p>
              <p>
                Inspired by the AI generated trends of CryptoPunks, Bored Ape
                Yacht Club, and various others, each token has been randomly
                generated and assembled from over 400+ hand-drawn attributes,
                generating a unique JRPG-style NFT.
              </p>
              <p>
                Avarik Saga is also largely influenced by notorious NFT-based
                games, such as Axie Infinity, where players battle each other to
                secure more money. The realm of Avarik Saga combines the most
                sought-after traits of the blockchain and gaming industries. It
                features collectibles, social avatars, auto battle gameplays,
                and play-to-earn functionalities in competitive gaming.
              </p>
              <p>
                Avarik Saga’s main goal is to build a next-generation
                blockchain-based metaverse of gaming NFTs, backed up by digital
                value. Avarik Saga is not just a game for blockchain players,
                but rather a game that will introduce blockchain to millions of
                players.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLitePaper;
