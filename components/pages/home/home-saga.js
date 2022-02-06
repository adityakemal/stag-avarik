import React from "react"

import { useScrollAnim, useWindowSize } from "components/hooks/hooks"
import paper from "assets/img/home/paper-4.png"
import saga from "assets/img/home/bg_the-saga.png"
import borderTop from "assets/img/home/ripped-paper-top.png"
import borderBottom from "assets/img/home/ripped-paper-bottom.png"

import { Element } from "react-scroll"
import { Parallax } from "react-scroll-parallax"
import AvarikButton from "components/avarik-saga/avarik-button"

const HomeSaga = () => {
  const [trigger, anim] = useScrollAnim()
  const { width } = useWindowSize()

  return (
    <Element name="saga-content">
      <div className="sc-home-saga sc-dark pt-main" id="saga" ref={trigger}>
        <img src={borderTop} className="border-paper-top" alt="" />
        <img src={borderBottom} className="border-paper-bottom" alt="" />
        <img src={saga} className="img-fluid img-saga" alt="" />
        <div className="container">
          <Parallax className="parallax" y={width > 786 ? [15, -15] : width > 576 ? [-50, -75] : [25, 0]} tagOuter="figure">
            <img src={paper} alt="" className={`img-paper ${anim(1, "revealInDown")}`} />
            <div className="row justify-content-end">
              <div className="col-lg-6 col-md-8 col-sm-12">
                <div className="content">
                  <h1 className={anim(7, "fadeInDown")}>The Saga</h1>
                  <p className={`desc ${anim(8, "fadeInDown")}`}>
                    <strong>Avarik Saga</strong> is a chronicle of <strong>8,888 generative NFT personas</strong>  depicting Knights, Archers, and Wizards from 4 clashing factions, each a unique combination of over<strong> 400+ uniquely hand-drawn traits.</strong>
                  </p>
                  <p className={`desc ${anim(9, "fadeInDown")}`}>
                    War has torn the once prosperous kingdom of Avarik into a land of violence and despair. And now there are whispers about a hero who will soon arise to guide their faction to triumph, finally ceasing the endless battles among the feisty <strong>Ignis</strong>, the benevolent <strong>Terra</strong>, the fluid <strong>Glacia</strong>, and the mystical <strong>Tenebris.</strong>
                  </p>
                  <AvarikButton
                    text="Video Lore"
                    link="https://www.youtube.com/watch?v=W5-WfcZdCew"
                  />
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </Element>
  )
}

export default HomeSaga
