import React, { useState } from "react"

import ignis from "assets/img/common/flag_ignis.png"
import tenebris from "assets/img/common/flag_tenebris.png"
import terra from "assets/img/common/flag_terra.png"
import glacia from "assets/img/common/flag_glacia.png"
import paperModal from "assets/img/home/paper-5.png"

import { useScrollAnim } from "components/hooks/hooks"

import { Element } from "react-scroll"
import { Modal } from "components/anti"
import ModalFactions from "./modal/modal-factions"

const data = [
    {
        name: "Ignis",
        descriptions: "The fluid Glacians may seem delicate, but fragile they are not. Ambitious and always striking with precision, they move with meaning and carry the grace of a floating snowflake.",
        img: ignis
    },
    {
        name: "Terra",
        descriptions: "The fluid Glacians may seem delicate, but fragile they are not. Ambitious and always striking with precision, they move with meaning and carry the grace of a floating snowflake.",
        img: terra
    },
    {
        name: "Glacia",
        descriptions: "The fluid Glacians may seem delicate, but fragile they are not. Ambitious and always striking with precision, they move with meaning and carry the grace of a floating snowflake.",
        img: glacia
    },
    {
        name: "Tenebris",
        descriptions: "The fluid Glacians may seem delicate, but fragile they are not. Ambitious and always striking with precision, they move with meaning and carry the grace of a floating snowflake.",
        img: tenebris
    },
]

const HomeFactions = () => {
    const [trigger, anim] = useScrollAnim()
    const [modal, setModal] = useState(null)
    const [selectedFactions, setSelectedFactions] = useState(null)

    return (
        <Element name="factions-content">
            <ModalFactions modal={modal} setModal={setModal} selectedFactions={selectedFactions} />
            <div className="sc-home-factions sc-dark pt-main" id="factions" ref={trigger}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="heading">
                        <h1 className={anim(1)}>Factions</h1>
                        <p className={`text-white ${anim(2)}`}>May the best faction bask in glory</p>
                    </div>
                    <div className={`story-factions`}>
                        <div className="row w-100">
                            {data?.map((item, i) => (
                                <div
                                    key={i}
                                    className={`col-3 faction-item`}
                                    onClick={() => {
                                        setSelectedFactions(item)
                                        setModal("modal-factions")
                                    }}
                                >
                                    <img src={item.img} className={`img-fluid ${anim(i + 5, "revealInDown")}`} alt={item.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default HomeFactions
