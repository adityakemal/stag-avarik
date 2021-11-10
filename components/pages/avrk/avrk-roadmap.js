import React from "react"
import { useScrollAnim } from "components/hooks/hooks"

import imgChart from "assets/img/token/img_total-supply.png"

const AVRKRoadmap = () => {
  const [trigger, anim] = useScrollAnim()
  return (
    <div className="sc-avrk-roadmap sc-dark pb-main" ref={trigger}>
      <div className="container mw-xl">
        <div className="heading">
          <h2 className={anim(1)}>Roadmap</h2>
          <p className={`${anim(2)} mw-md mx-auto`}>The routes towards AVRK</p>
        </div>
        <div className={`box box-light ${anim(3)}`}>
          <div className="box-inner">
            <div className="content content-sm h-300px"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AVRKRoadmap
