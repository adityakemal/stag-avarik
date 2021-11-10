import React from "react"

import { useScrollAnim } from "components/hooks/hooks"

import bgMain from "assets/img/common/bg_main-desktop.jpg"
import bgMainMobile from "assets/img/common/bg_main-mobile.jpg"
import logoMain from "assets/img/common/logo_main-title.png"

const AVRKUseCases = () => {
  const [trigger, anim] = useScrollAnim()
  return (
    <div className="sc-avrk-use-cases sc-dark py-main" ref={trigger}>
      <div className="container mw-xl">
        <div className="heading">
          <h2 className={anim(1)}>Token Use Cases</h2>
          <p className={`${anim(2)} mw-md mx-auto`}>
            AVRK Token will be developed as an ERC 20 governance token for
            Avarik Saga Universe, focusing on giving back to our players.
          </p>
        </div>
        <div className={`box box-light ${anim(2)}`}>
          <div className="box-inner">
            <div className="content">
              <div className="row">
                <div className="col-lg-7">
                  <p className={anim(3)}>
                    <strong>Recruit fee</strong> of new Avarik
                  </p>
                  <p className={anim(4)}>
                    <strong>Monetization of appointment</strong> model to reduce
                    time of upgrades, recruit, etc.
                  </p>
                  <p className={anim(5)}>
                    <strong>AVRK token</strong> will act as a{" "}
                    <strong>transaction fee on our marketplace</strong>
                  </p>
                  <p className={`${anim(6)} mb-0`}>
                    <strong>Gives voting rights</strong> on how the Avarik Saga
                    Universe's path similar to a stock
                  </p>
                </div>
                <div className="col-lg-5 order-lg-first"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AVRKUseCases
