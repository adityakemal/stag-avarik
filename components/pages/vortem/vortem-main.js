import React from "react"

import { Button, Image, Modal, Link } from "components/anti"

import { useScrollAnim } from "components/hooks/hooks"

import logo from "assets/img/vortem/1_logo.png"
import whatMain from "assets/img/vortem/2a_what_main.png"
import whatExtra from "assets/img/vortem/2b_what_extra.png"
import claimTitle from "assets/img/vortem/3a_claim_title.png"
import claimStaking from "assets/img/vortem/3b_claim_staking.png"
import claimHolding from "assets/img/vortem/3b_claim_holding.png"
import claimPlay from "assets/img/vortem/3c_claim_play.png"
import claimExchange from "assets/img/vortem/3d_claim_exchange.png"
import recruitTitle from "assets/img/vortem/4a_recruit_title.png"
import recruit1 from "assets/img/vortem/4b_recruit-1.png"
import recruit2 from "assets/img/vortem/4b_recruit-2.png"
import recruit3 from "assets/img/vortem/4b_recruit-3.png"
import recruit4 from "assets/img/vortem/4b_recruit-4.png"
import stakingTitle from "assets/img/vortem/5a_staking_title.png"
import holdingTitle from "assets/img/vortem/5a_holding_title.png"
import stakingImage from "assets/img/vortem/5b_staking_image.png"
import AvarikButton from "components/avarik-saga/avarik-button"

const WeaponsMain = () => {
  const [trigger, anim] = useScrollAnim()
  const [trigger1, anim1] = useScrollAnim()
  const [trigger2, anim2] = useScrollAnim()
  const [trigger3, anim3] = useScrollAnim()

  return (
    <>
      <section className="sc-main sc-dark sc-vortem-logo py-main">
        <div className="container">
          <div className="logo-text">
            <p className="fadeInUp d1 text-warning">Avarik Saga In Game Currency</p>
            <h1 className="fadeInUp d2">$Vortem Token</h1>
          </div>
          <img src={logo} className="img-fluid fadeInUp d3" alt="Vortem" />
        </div>
      </section>
      <section className="sc-main sc-dark sc-vortem-what py-main">
        <div className="container mw-lg">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-left">
              <h1>What is <br /> $VORTEM </h1>
              <p className="mw-350px">
                $VORTEM is the official Avarik Saga in-game currency, which you can use for upgrading weapons & armors, recruit new avariks and purchase ingredients
              </p>
            </div>
            <div className="col-md-6">
              <img src={whatMain} className="img-fluid fadeInUp d5" alt="Vortem" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="sc-main sc-dark sc-vortem-claim py-main"
        ref={trigger}
      >
        <div className="container">
          <div className="heading">
            <img
              src={claimTitle}
              className={`img-fluid mb-3 ${anim(1)}`}
              alt="Vortem"
            />
          </div>
          <div className="claim-list">
            <div className="claim-mobile d-block d-xl-none">
              <div className="row">
                <div className="col-12">
                  <img
                    src={claimHolding}
                    className={`img-fluid claim-1 ${anim(4)}`}
                    alt="Vortem"
                  />
                  <p className={`mb-0 ${anim(5)}`}>
                    By holding the Avarik NFT you can earn $VORTEM Tokens.
                  </p>
                </div>
                <div className="col-12">
                  <img
                    src={claimPlay}
                    className={`img-fluid claim-2 ${anim(2)}`}
                    alt="Vortem"
                  />
                  <ul className={`mb-0 ${anim(3)} list-unstyled`}>
                    <li>- Player v. Environment (PvE)</li>
                    <li>- Player v. Player (PvP) </li>
                    <li>- Match Making Rating (MMR) PvP</li>
                    <li>- Dungeon Raid</li>
                    <li>- Faction War</li>
                    <li>- Tournament Rewards</li>
                  </ul>
                </div>
                <div className="col-12">
                  <img
                    src={claimExchange}
                    className={`img-fluid claim-3 ${anim(6)}`}
                    alt="Vortem"
                  />
                  <p className={`mb-0 ${anim(7)}`}>
                    To be announced end of 2021.
                  </p>
                </div>
              </div>
            </div>
            <div className="claim-desktop d-none d-xl-flex">
              <div className="claim-item claim-item-1">
                <img
                  src={claimHolding}
                  className={`img-fluid claim-1 ${anim(2)}`}
                  alt="Vortem"
                />
                <p className={`mb-0 ${anim(3)}`}>
                  By holding the Avarik NFT you can earn $VORTEM Tokens.
                </p>
              </div>
              <div className="claim-item claim-item-2">
                <img
                  src={claimPlay}
                  className={`img-fluid claim-2 ${anim(4)}`}
                  alt="Vortem"
                />
                <ul className={`mb-0 ${anim(3)} list-unstyled`}>
                  <li>- Player v. Environment (PvE)</li>
                  <li>- Player v. Player (PvP) </li>
                  <li>- Match Making Rating (MMR) PvP</li>
                  <li>- Dungeon Raid</li>
                  <li>- Faction War</li>
                  <li>- Tournament Rewards</li>
                </ul>
              </div>
              <div className="claim-item">
                <img
                  src={claimExchange}
                  className={`img-fluid claim-3 ${anim(6)}`}
                  alt="Vortem"
                />
                <p className={`mb-0 ${anim(7)}`}>
                  To be announced end of 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sc-main sc-dark sc-vortem-staking py-main"
        ref={trigger2}
      >
        <div className="container mw-xl">
          <h1 className={`mb-4 ${anim(2)} d-block d-md-none text-center`}>Hold to Earn Mechanic</h1>
          <div className="row">
            <div className="col-md-6 col-xl-7 mb-4">
              <img
                src={stakingImage}
                className={`img-fluid ${anim2(4)}`}
                alt="Vortem"
              />
            </div>
            <div className="col-md-6 col-xl-5 col-text">
              <h1 className={`mb-4 ${anim(2)} d-none d-md-block`}>Hold to Earn Mechanic</h1>
              <p className={`${anim2(3)}`}>
                For each Avarik Saga NFT that you hold will earn approximately 3 $VORTEM per day.
              </p>
              <p className={`${anim2(4)}`}>
                You can claim your $VORTEM tokens once the game is officially launched.
              </p>
              <AvarikButton text="Learn More" className="px-5 ml-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WeaponsMain
