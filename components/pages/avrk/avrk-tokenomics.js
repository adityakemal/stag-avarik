import React from "react"
import { useScrollAnim } from "components/hooks/hooks"

import imgChart from "assets/img/token/img_total-supply.png"

const AVRKTokenomics = () => {
  const [trigger, anim] = useScrollAnim()
  return (
    <div className="sc-avrk-tokenomics sc-dark pb-main" ref={trigger}>
      <div className="container mw-xl">
        <div className="heading">
          <h2 className={anim(1)}>Tokenomics</h2>
          <p className={`${anim(2)} mw-md mx-auto`}>
            $AVRK are the native tokens used in the governance of Avarik Saga
            ecosystem. These tokens have several utilities that will help the
            holders to be an active part of building the community.
          </p>
        </div>
        <div className={`box box-light ${anim(2)}`}>
          <div className="box-inner">
            <div className="content content-sm">
              <div className="row row-3">
                <div className={`col-md-8 col-chart ${anim(3)}`}>
                  <h3>Token Allocation</h3>
                  <p>$AVRK Token has a limited supply of 500,000,000</p>
                  <img src={imgChart} className="img-fluid" alt="Chart" />
                </div>
                <div className="col-md-4 col-chart-data order-md-first">
                  <div className={`chart-item ${anim(4)}`}>
                    <div>
                      <span className="caption">Token Symbol</span>
                      <h3>$AVRK</h3>
                    </div>
                  </div>
                  <div className={`chart-item ${anim(5)}`}>
                    <div>
                      <span className="caption">Initial Circulation</span>
                      <h3>25,000,000</h3>
                      <small>25%</small>
                    </div>
                  </div>
                  <div className={`chart-item ${anim(6)}`}>
                    <div>
                      <span className="caption">Total Supply</span>
                      <h3>500,000,000</h3>
                    </div>
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

export default AVRKTokenomics
