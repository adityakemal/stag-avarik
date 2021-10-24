import React from "react"
import { Link } from "components/anti/link/link"

import { useScrollAnim } from "components/hooks/hooks"

import logoMain from "assets/img/common/logo_main-title.png"

const LitePaperMain = () => {
  const [trigger, anim] = useScrollAnim()

  return (
    <div className="sc-main sc-litepaper pb-main" ref={trigger}>
      <div className="container mw-lg">
        <Link to="/" className="logo">
          <img src={logoMain} className={`img-fluid ${anim(1)}`} alt="Logo" />
        </Link>
        <div className={`box box-light ${anim(1, "fadeIn")}`}>
          <div className="box-inner">
            <div className="content">
              <div className="heading">
                <h2 className="fadeInUp d2">Avarik Saga Lite Paper</h2>
              </div>
              <section className="fadeInUp d3">
                <h3>Abstract</h3>
                <p>
                  Immerse yourself in the medieval world of Avarik Saga, a
                  metaverse where blockchain-based game converge with art in a
                  creative space community. Uncover endless possibilities as you
                  journey in this war-ridden realm with 8,888 generative
                  personas of loyal Knights, crafty Archers, and arcane Wizards
                  in 4 novel factions and future realms to come.{" "}
                </p>

                <p>
                  Inspired by the AI generated trends of CryptoPunks, Bored Ape
                  Yacht Club, and various others, each token has been randomly
                  generated and assembled from over 400+ hand-drawn attributes,
                  generating a unique JRPG-style NFT.{" "}
                </p>
                <p>
                  Avarik Saga is also largely influenced by notorious NFT-based
                  games, such as Axie Infinity, where players battle each other
                  to secure more money. The realm of Avarik Saga combines the
                  most sought-after traits of the blockchain and gaming
                  industries. It features collectibles, social avatars, auto
                  battle gameplays, and play-to-earn functionalities in
                  competitive gaming.
                </p>
                <p>
                  {" "}
                  Avarik Saga’s main goal is to build a next-generation
                  blockchain-based metaverse of gaming NFTs, backed up by
                  digital value. Avarik Saga is not just a game for blockchain
                  players, but rather a game that will introduce blockchain to
                  millions of players.
                </p>
              </section>
              <section className="fadeInUp d4">
                <h3>Introduction</h3>
                <p>
                  The sales volume for non-fungible tokens (NFTs) hit $2.5
                  billion in the first six months of 2021, a massive increase
                  from a total of $13.7 million in the whole year of 2020.
                  Simultaneously, OpenSea saw an exponential growth of NFT
                  collectible trading volumes on their platform for projects
                  like CryptoPunks, Bored Ape Yacht Club, VeeFriends, and many
                  more.
                </p>

                <p>
                  The trends that triggered this growth were driven by the
                  increase in communities exposed to NFT collectible projects
                  and an enormous growth in Axie Infinity game players in
                  developing countries. Combining NFT collectibles and gaming
                  opens up a completely new opportunity. Thus, Avarik Saga was
                  born.
                </p>

                <p>
                  It is now time to step into the medieval realms of Avarik
                  Saga: an auto battle JRPG play2earn game where players need to
                  possess at least 3 Avarik Saga NFTs to play the game. Journey
                  in this war-ridden realm with 8,888 generative NFT ERC-721
                  token personas from over 400+ hand-drawn attributes of loyal
                  Knights, crafty Archers, and arcane Wizards in 4 novel
                  factions and future realms to come.
                </p>
                <p>
                  Avarik Saga will feature a play2earn Auto Battle JRPG where
                  players can secure more money by playing the game regularly.
                  The main currency used in the Avarik Saga economy will be
                  $AVRK. It can be used to purchase exclusive NFTs, Cosmetics,
                  Gemstones, Ingredients, Weapons, Armours, Pets, and Avarik
                  Saga’s DAO.
                </p>
              </section>
              <section className="fadeInUp d5">
                <h3>Game Concept</h3>
                <h5>P2E</h5>
                <p>
                  Heroes earn your merits! Get your $AVRK token by participating
                  in-game battles regularly.
                </p>
                <h5>PVE</h5>
                <p>
                  Own 3 NFT Avarik to start Autobattler style games against AI
                  Mini Bosses and Big Bosses like Axie. Don’t miss the
                  ingredient drops from each battle.
                </p>
                <h5>Casual PVP</h5>
                <p>
                  Heroes, face off with Avarik’s renowned warriors with your
                  best composition, strategies, and skills.
                </p>
                <h5>MMR PVP</h5>
                <p>
                  Earn your ranks by winning battles and get matched against
                  Heroes of similar ranks. Rise through the MMR to gain honor
                  and make your name on the leaderboard.
                </p>
                <h5>Multiparty PVE</h5>
                <p>
                  Form parties and team up with your trusted comrades in the
                  fight against AI generated Big Bosses! Get rare ingredient
                  drops from your battle raid.
                </p>
                <h5>Campaign/Dungeon</h5>
                <p>
                  Finish the campaign story and stay up to date with each
                  expansion. You will be rewarded with rare ingredients.
                </p>
                <h5>Faction War</h5>
                <p>
                  Conquer the Faction War to lead your faction to victory and
                  earn the exclusive rare ingredient rewards.
                </p>
                <h5>Fusion Mechanic</h5>
                <p>
                  Heroes can combine 3 Avarik Saga NFTs with a Gemstone and
                  gamble for 1 Legendary Avarik Saga NFT.
                </p>
                <h5>Ingredient Exchange Center</h5>
                <p>
                  Ingredients are rewards that Heroes earn in the game. They are
                  not NFT based so Heroes can buy and sell their ingredients in
                  the Avarik Exchange Center.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LitePaperMain
