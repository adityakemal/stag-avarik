import React from "react"
import { Timeline } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"

const AVRKRoadmap = () => {
  const [trigger, anim] = useScrollAnim()

  const data = [
    {
      title: "Investor Round",
      text: "Nov 2021",
    },
    {
      title: "Public Sale",
      text: "Dec 2021",
    },
    {
      title: "In-Game Utility",
      text: "Q1 2022",
    },
  ]
  return (
    <div className="sc-avrk-roadmap sc-dark pb-main" ref={trigger}>
      <div className="container mw-xl">
        <div className="heading">
          <h2 className={anim(1)}>Roadmap</h2>
          <p className={`${anim(2)} mw-md mx-auto`}>The Route Towards $AVRK</p>
        </div>
        <div className={`box box-light ${anim(3)}`}>
          <div className="box-inner">
            <div className="content content-sm">
              <div className="avrk-roadmap-desktop d-none d-md-block">
                <div className="row">
                  <div className="col-4">
                    <h4>Investor Round</h4>
                    <p className="mb-0">Nov 2021</p>
                  </div>
                  <div className="col-4">
                    <h4>Public Sale</h4>
                    <p className="mb-0">Dec 2021</p>
                  </div>
                  <div className="col-4">
                    <h4>In-Game Utility</h4>
                    <p className="mb-0">Q1 2022</p>
                  </div>
                </div>
              </div>
              <div className="avrk-roadmap-mobile d-block d-md-none">
                <Timeline data={data} className="mb-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AVRKRoadmap
