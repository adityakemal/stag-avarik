import React from "react"

import ignis from "assets/img/common/flag_ignis.png"
import tenebris from "assets/img/common/flag_tenebris.png"
import terra from "assets/img/common/flag_terra.png"
import glacia from "assets/img/common/flag_glacia.png"

import { useScrollAnim } from "components/hooks/hooks"

import { Element } from "react-scroll"

const HomeFactions = () => {
    const [trigger, anim] = useScrollAnim()

    return (
        <Element name="factions-content">
            <div className="sc-home-factions sc-dark pt-main" id="factions" ref={trigger}>
                <div className="container">
                    <div className="heading">
                        <h1 className={anim(1)}>Factions</h1>
                        <p className={`text-white ${anim(2)}`}>May the best faction bask in glory</p>
                    </div>
                    <div className={`story-factions ${anim(3)}`}>
                        <div className="row w-100">
                            <div className={`col-3 ${anim(4)}`}>
                                <img src={ignis} className="img-fluid" alt="Ignis" />
                            </div>
                            <div className={`col-3 ${anim(5)}`}>
                                <img src={terra} className="img-fluid" alt="Terra" />
                            </div>
                            <div className={`col-3 ${anim(6)}`}>
                                <img src={glacia} className="img-fluid" alt="Glacia" />
                            </div>
                            <div className={`col-3 ${anim(7)}`}>
                                <img
                                    src={tenebris}
                                    className="img-fluid"
                                    alt="Tenebris"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default HomeFactions