import React from "react"

import { Button, Image, Modal, Link } from "components/anti"

import { useScrollAnim } from "components/hooks/hooks"

import logo from "assets/img/vortem/1_logo.png"
import whatMain from "assets/img/vortem/2a_what_main.png"
import whatExtra from "assets/img/vortem/2b_what_extra.png"
import claimTitle from "assets/img/vortem/3a_claim_title.png"
import claimStaking from "assets/img/vortem/3b_claim_staking.png"
import claimPlay from "assets/img/vortem/3c_claim_play.png"
import claimExchange from "assets/img/vortem/3d_claim_exchange.png"
import recruitTitle from "assets/img/vortem/4a_recruit_title.png"
import recruit1 from "assets/img/vortem/4b_recruit-1.png"
import recruit2 from "assets/img/vortem/4b_recruit-2.png"
import recruit3 from "assets/img/vortem/4b_recruit-3.png"
import recruit4 from "assets/img/vortem/4b_recruit-4.png"
import stakingTitle from "assets/img/vortem/5a_staking_title.png"
import stakingImage from "assets/img/vortem/5b_staking_image.png"

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
            <p className="fadeInUp d1">Avarik Saga In Game Currency</p>
            <h1 className="fadeInUp d2">
              <span>$Vortem</span> <br />
              Token
            </h1>
          </div>
          <img src={logo} className="img-fluid fadeInUp d3" alt="Vortem" />
        </div>
      </section>
      <section className="sc-main sc-dark sc-vortem-what pb-main">
        <div className="container">
          <div className="heading">
            <p className="fadeInUp d3 mb-1">What Is</p>
            <h2 className="fadeInUp d4 h1">
              <span>$Vortem</span>
            </h2>
          </div>
          <img src={whatMain} className="img-fluid fadeInUp d5" alt="Vortem" />
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quam laboriosam obcaecati quae mollitia voluptatem odit
              perferendis natus. Quod eaque modi suscipit corrupti adipisci
              similique ipsa debitis accusantium sunt cupiditate!
            </p>
          </div>
          <div className="claim-list">
            <div className="claim-mobile d-block d-xl-none">
              <div className="row">
                <div className="col-12">
                  <img
                    src={claimPlay}
                    className={`img-fluid claim-2 ${anim(2)}`}
                    alt="Vortem"
                  />
                  <p className={`mb-0 ${anim(3)}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    src={claimStaking}
                    className={`img-fluid claim-1 ${anim(4)}`}
                    alt="Vortem"
                  />
                  <p className={`mb-0 ${anim(5)}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    src={claimExchange}
                    className={`img-fluid claim-3 ${anim(6)}`}
                    alt="Vortem"
                  />
                  <p className={`mb-0 ${anim(7)}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="claim-desktop d-none d-xl-flex">
              <div className="claim-item claim-item-1">
                <img
                  src={claimStaking}
                  className={`img-fluid claim-1 ${anim(2)}`}
                  alt="Vortem"
                />
                <p className={`mb-0 ${anim(3)}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="claim-item">
                <img
                  src={claimPlay}
                  className={`img-fluid claim-2 ${anim(4)}`}
                  alt="Vortem"
                />
                <p className={`mb-0 ${anim(5)}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="claim-item">
                <img
                  src={claimExchange}
                  className={`img-fluid claim-3 ${anim(6)}`}
                  alt="Vortem"
                />
                <p className={`mb-0 ${anim(7)}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sc-main sc-dark sc-vortem-recruit py-main"
        ref={trigger1}
      >
        <div className="container">
          <div className="heading">
            <img
              src={recruitTitle}
              className={`img-fluid ${anim1(1)}`}
              alt="Vortem"
            />
          </div>
          <div className="recruit-list">
            <img
              src={whatExtra}
              className={`img-fluid img-extra ${anim(5)}`}
              alt="Vortem Char"
            />
            <div className="row">
              <div className="col-md-6">
                <p className={`mb-3 d-none d-md-block ${anim1(1)}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <img
                  src={recruit1}
                  className={`img-fluid ${anim1(2)}`}
                  alt="Vortem"
                />
                <p className={`mb-0 d-block d-md-none ${anim1(3)}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-6">
                <p className={`mb-3 d-none d-md-block ${anim1(3)}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <img
                  src={recruit2}
                  className={`img-fluid ${anim1(4)}`}
                  alt="Vortem"
                />
                <p className={`mb-0 d-block d-md-none ${anim1(5)}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={recruit3}
                  className={`img-fluid ${anim1(6)}`}
                  alt="Vortem"
                />
                <p className={`mb-0 ${anim1(7)}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={recruit4}
                  className={`img-fluid ${anim1(8)}`}
                  alt="Vortem"
                />
                <p className={`mb-0 ${anim1(9)}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
          <div className="heading">
            <img
              src={stakingTitle}
              className={`img-fluid ${anim2(1)}`}
              alt="Staking"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className={`${anim2(2)}`}>
                Each Avarik NFT in the staking smart contracts will earn 10
                $VORTEM per day.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={stakingImage}
                className={`img-fluid ${anim2(3)}`}
                alt="Vortem"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WeaponsMain
