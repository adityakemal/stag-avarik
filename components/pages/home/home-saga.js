import React from "react"

import { useScrollAnim } from "components/hooks/hooks"
import paper from "assets/img/home/paper-4.png"

import { Element } from "react-scroll"
import { Parallax } from "react-scroll-parallax"
import AvarikButton from "components/avarik-saga/avarik-button"

const HomeSaga = () => {
  const [trigger, anim] = useScrollAnim()

  return (
    <Element name="saga-content">
      <div className="sc-home-saga sc-dark pt-main" id="saga" ref={trigger}>
        <div className="container">
          <Parallax className="parallax" y={[-15, 15]} tagOuter="figure">
            <div className="content">
              <img src={paper} alt="" className={`img-fluid img-paper ${anim(1, "revealInDown")}`} />
              <h1 className={anim(7, "fadeInDown")}>The Saga</h1>
              <p className={anim(8, "fadeInDown")}>
                <strong>Avarik Saga</strong> is a chronicle of <strong>8,888 generative NFT personas</strong>  depicting Knights, Archers, and Wizards from 4 clashing factions, each a unique combination of over<strong> 400+ uniquely hand-drawn traits.</strong>
              </p>
              <p className={anim(9, "fadeInDown")}>
                War has torn the once prosperous kingdom of Avarik into a land of violence and despair. And now there are whispers about a hero who will soon arise to guide their faction to triumph, finally ceasing the endless battles among the feisty <strong>Ignis</strong>, the benevolent <strong>Terra</strong>, the fluid <strong>Glacia</strong>, and the mystical <strong>Tenebris.</strong>
              </p>
              <AvarikButton
                text="Watch Video Lore"
                variant="gold"
                className="w-100"
                link="https://www.youtube.com/watch?v=W5-WfcZdCew"
              />
            </div>
          </Parallax>
        </div>
      </div>
    </Element>
  )
}

export default HomeSaga
