import React, { useState } from "react"
import { Element } from "react-scroll"

import ignis from "assets/img/common/flag_ignis.png"
import tenebris from "assets/img/common/flag_tenebris.png"
import terra from "assets/img/common/flag_terra.png"
import glacia from "assets/img/common/flag_glacia.png"
import phoenix from "assets/img/home/phoenix.png"
import dragon from "assets/img/home/dragon.png"
import gate from "assets/img/home/separator-faction.png"

import ModalFactions from "./modal/modal-factions"
import { useScrollAnim } from "components/hooks/hooks"
import AvarikTitle from "components/avarik-saga/avarik-title"

const data = [
    {
        name: "Ignis",
        description: "The feisty Ignis proudly bear their faction’s fire insignia. Much like the scorching desert they call home, they are the life and soul of any party - an Ignis never backs down from a challenge.",
        img: ignis
    },
    {
        name: "Glacia",
        img: glacia,
        description: "The fluid Glacians may seem delicate, but fragile they are not. Ambitious and always striking with precision, they move with meaning and carry the grace of a floating snowflake."
    },
    {
        name: "Terra",
        img: terra,
        description: "Vowing to be true friends of Nature, the benevolent Terrans’ loyalties to their insignia are as sturdy as their resolve; they will stand their ground no matter what stands before them."
    },
    {
        name: "Tenebris",
        img: tenebris,
        description: " Little is known of the Tenebris, a faction of mysterious beings said to have made a pact with the Dark World which aids them in achieving their deepest desires. Where others drown in the darkness, the Tenebris thrives."
    },
]

const HomeFactions = () => {
    const [trigger, anim] = useScrollAnim()
    const [modal, setModal] = useState(null)
    const [selectedFactions, setSelectedFactions] = useState(null)

    return (
        <Element name="factions-content">
            <ModalFactions modal={modal} setModal={setModal} selectedFactions={selectedFactions} />
            <div className="sc-home-factions pt-main" id="factions" ref={trigger}>
                <img src={phoenix} className="phoenix" alt="" />
                <img src={dragon} className="dragon" alt="" />
                <img src={gate} className="gate" alt="" />
                <div className="container">
                    <div className="heading">
                        <AvarikTitle title="Factions" titleClassName={anim(1)} className="mx-auto" />
                        <p className={`${anim(2)}`}>May the best faction bask in glory</p>
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
