import React from "react"

import imgStaking from "assets/img/token/img_staking.png"
import imgPlaying from "assets/img/token/img_playing-the-game.png"
import imgBuying from "assets/img/token/img_buying-ava-token.png"

import { useScrollAnim } from "components/hooks/hooks"

const HomeVortem = () => {
  const [trigger, anim] = useScrollAnim()
  const [trigger2, anim2] = useScrollAnim()
  const [trigger3, anim3] = useScrollAnim()

  return (
    <>
      <div className="sc-home-vortem sc-dark pt-main" ref={trigger}>
        <div className="container">
          <div className="heading">
            <h2 className={anim(1)}>$VORTEM Token</h2>
            <p>Avarik Saga In Game Currency</p>
          </div>
          <div className={`box box-light ${anim(2)}`}>
            <div className="box-inner">
              <div className="content">
                <p className={`${anim(3)}`}>
                  <strong>
                    VORTEM is the official Avarik Saga in-game currency
                  </strong>
                  , where you can{" "}
                  <strong>
                    purchase game ingredients, weapons, armors and breed.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-home-vortem-claim sc-dark pt-main-sm" ref={trigger2}>
        <div className="container">
          <div className="heading">
            <h4 className={anim2(1)}>How to Claim $VORTEM Token</h4>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className={`box box-light ${anim2(2)}`}>
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
              <div className={`box box-light box-play ${anim2(3)}`}>
                <div className="box-inner">
                  <div className="content content-sm">
                    <img src={imgPlaying} className="img-fluid" alt="Playing" />
                    <div className="info">
                      <h3>Play the Game</h3>
                      <p className="mb-0">
                        Player v. Environment (PvE), Player v. Player (PvP),
                        Match Making Rating (MMR) PvP, Dungeon Raid, Faction
                        War, Tournament Rewards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`box box-light ${anim2(4)}`}>
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
      <div className="sc-home-vortem-rec sc-dark pt-main-sm" ref={trigger3}>
        <div className="container">
          <div className="heading">
            <h4 className={anim3(1)}>Recruit & Staking Mechanics</h4>
          </div>
          <div className={`box box-light ${anim3(2)}`}>
            <div className="box-inner">
              <div className="content">
                <div className="row">
                  <div className="col-md-5"></div>
                  <div className="col-md-7">
                    <h5 className={anim(3)}>Recruit Mechanics</h5>
                    <p className={`${anim3(4)}`}>
                      The cost in the VORTEM token is a function of the recruit
                      count of the parent's Avarik. Meaning, the higher the
                      recruit count, the more VORTEM token you will need.
                    </p>
                    <ol className={`${anim(5)}`}>
                      <li>
                        Must have <strong>2 Avarik NFT</strong>, both Male &
                        Female.
                      </li>
                      <li>
                        The <strong>cost to recruit</strong> will vary based on
                        the number of times the Avarik has bred.
                      </li>
                      <li>
                        We are planning to{" "}
                        <strong>
                          introduce the Avarik Saga Governance Token ($AVRK)
                        </strong>
                        , which will be required for recruiting additional to
                        the in-game utility token (Phase 2).
                      </li>
                      <li>
                        We are setting up a{" "}
                        <strong>
                          model to decide on the duration of recruiting with a
                          chance to lower the duration through in-game rewards
                        </strong>{" "}
                        such as recruiting stones and scrolls.
                      </li>
                    </ol>

                    <h5 className={`${anim(6)} mt-5`}>Staking Mechanics</h5>
                    <p className={`${anim3(7)} mb-0`}>
                      Each Avarik NFT in the staking smart contracts will earn
                      10 $VORTEM per day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeVortem
