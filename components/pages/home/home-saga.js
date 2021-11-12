import React from "react"

import ignis from "assets/img/common/flag_ignis.png"
import tenebris from "assets/img/common/flag_tenebris.png"
import terra from "assets/img/common/flag_terra.png"
import glacia from "assets/img/common/flag_glacia.png"

import { useScrollAnim } from "components/hooks/hooks"

import { Element } from "react-scroll"

const HomeSaga = () => {
  const [trigger, anim] = useScrollAnim()

  return (
    <Element name="saga-content">
      <div className="sc-home-saga sc-dark pt-main" id="saga" ref={trigger}>
        <div className="container">
          <div className="heading">
            <h2 className={anim(1)}>The Saga</h2>
          </div>
          <div className={`box ${anim(2)}`}>
            <div className="box-inner">
              <div className="content">
                <p className={anim(3)}>
                  <strong>Avarik Saga</strong> is the journey of the{" "}
                  <strong>8,888 generative NFT personas</strong> of Knights,
                  Archers, and Wizards originated from over{" "}
                  <strong>400+ uniquely hand drawn traits</strong> in 4 clashing
                  factions.
                </p>
                <p className={anim(4)}>
                  There is a legend whispered through these medieval lands, that
                  a hero will guide their faction to triumph and cease the
                  endless wars between the feisty <strong>Ignis</strong>, the
                  benevolent <strong>Terra</strong>, the fluid{" "}
                  <strong>Glacia</strong>, and the mystical{" "}
                  <strong>Tenebris</strong>.
                  {/* <br className="d-block d-md-none" />
                <br className="d-block d-md-none" />
                Greed runs rampant in the trader’s towns, hunter’s forests and
                pirate’s waters where only the sly and the merciless triumph.
                The dawn of a new era draws near... */}
                </p>
                {/* <p className="mb-0">
                Embark on the Avarik Saga and journey as one of the 8,888
                generative personas of loyal Knights, crafty Archers, and arcane
                Wizards in 4 clashing factions. Will you lead your faction to
                glory?
              </p> */}
                <div className="story-factions">
                  <div className="row">
                    <div className={`col-3 ${anim(5)}`}>
                      <img src={ignis} className="img-fluid" alt="Ignis" />
                    </div>
                    <div className={`col-3 ${anim(6)}`}>
                      <img src={terra} className="img-fluid" alt="Terra" />
                    </div>
                    <div className={`col-3 ${anim(7)}`}>
                      <img src={glacia} className="img-fluid" alt="Glacia" />
                    </div>
                    <div className={`col-3 ${anim(8)}`}>
                      <img
                        src={tenebris}
                        className="img-fluid"
                        alt="Tenebris"
                      />
                    </div>
                  </div>
                </div>
                {/* <p className="mb-0">
                Greed runs rampant in the trader’s towns, hunter’s forests and
                pirate’s waters where only the sly and the merciless triumph.
                The dawn of a new era draws near...
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default HomeSaga
