import React from "react"
import { useScrollAnim } from "components/hooks/hooks"

import imgChart from "assets/img/token/img_avrk-graph.png"

const AVRKReleaseSchedule = () => {
  const [trigger, anim] = useScrollAnim()
  return (
    <div className="sc-avrk-release-schedule sc-dark pb-main" ref={trigger}>
      <div className="container mw-xl">
        <div className="heading">
          <h2 className={anim(1)}>Token Release Schedule</h2>
          {/* <p className={`${anim(2)} mw-md mx-auto`}>
            AVRK are the native tokens used in the governance of Avarik Saga
            ecosystem. These tokens have several utilities that will
          </p> */}
        </div>
        <div className={`box box-light ${anim(3)}`}>
          <div className="box-inner">
            <div className="content content-sm">
              <img src={imgChart} className="img-fluid" alt="Graph" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AVRKReleaseSchedule
