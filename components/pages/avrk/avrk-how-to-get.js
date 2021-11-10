import React from "react"

import { useScrollAnim } from "components/hooks/hooks"

import imgStaking from "assets/img/token/img_staking.png"
import imgPlaying from "assets/img/token/img_playing-the-game.png"
import imgBuying from "assets/img/token/img_buying-ava-token.png"

const AVRKHowToGet = () => {
  const [trigger, anim] = useScrollAnim()
  return (
    <div className="sc-avrk-how-to-get sc-dark pb-main" ref={trigger}>
      <div className="container mw-xl">
        <div className="heading">
          <h2 className={anim(1)}>How to Get AVRK</h2>
          {/* <p className={`${anim(2)} mw-md mx-auto`}>
            AVRK Token will be developed as an ERC 20 governance token for
            Avarik Saga Universe, focusing on giving back to our players.
          </p> */}
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className={`box box-light ${anim(2)}`}>
              <div className="box-inner">
                <div className="content content-sm">
                  <img src={imgStaking} className="img-fluid" alt="Staking" />
                  <div className="info">
                    <h3>Staking</h3>
                    <p className="mb-0">
                      By staking the Avarik NFT you will get the VORTEM token.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`box box-light box-play ${anim(3)}`}>
              <div className="box-inner">
                <div className="content content-sm">
                  <img src={imgPlaying} className="img-fluid" alt="Playing" />
                  <div className="info">
                    <h3>Play the Game</h3>
                    <p className="mb-0">
                      Player v. Environment (PvE), Player v. Player (PvP), Match
                      Making Rating (MMR) PvP, Dungeon Raid, Faction War,
                      Tournament Rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`box box-light ${anim(4)}`}>
              <div className="box-inner">
                <div className="content content-sm">
                  <img src={imgBuying} className="img-fluid" alt="Buying" />
                  <div className="info">
                    <h3>Buying from Various Exchanges</h3>
                    <p className="mb-0">To be announced end of 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AVRKHowToGet
