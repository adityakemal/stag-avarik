import React, { useState } from "react"
import { Element } from "react-scroll"

import ignis from "assets/img/common/flag_ignis.png"
import ignisChar from "assets/img/factions/ignis-character.png"
import ignisChar1 from "assets/img/factions/ignis-character-1.png"
import ignisChar2 from "assets/img/factions/ignis-character-2.png"
import ignisChar3 from "assets/img/factions/ignis-character-3.png"
import ignisChar4 from "assets/img/factions/ignis-character-4.png"

import tenebris from "assets/img/common/flag_tenebris.png"
import tenebrisChar from "assets/img/factions/tenebris-character.png"
import tenebrisChar1 from "assets/img/factions/tenebris-character-1.png"
import tenebrisChar2 from "assets/img/factions/tenebris-character-2.png"
import tenebrisChar3 from "assets/img/factions/tenebris-character-3.png"
import tenebrisChar4 from "assets/img/factions/tenebris-character-4.png"

import terra from "assets/img/common/flag_terra.png"
import terraChar from "assets/img/factions/terra-character.png"
import terraChar1 from "assets/img/factions/terra-character-1.png"
import terraChar2 from "assets/img/factions/terra-character-2.png"
import terraChar3 from "assets/img/factions/terra-character-3.png"
import terraChar4 from "assets/img/factions/terra-character-4.png"

import glacia from "assets/img/common/flag_glacia.png"
import glaciaChar from "assets/img/factions/glacia-character.png"
import glaciaChar1 from "assets/img/factions/glacia-character-1.png"
import glaciaChar2 from "assets/img/factions/glacia-character-2.png"
import glaciaChar3 from "assets/img/factions/glacia-character-3.png"
import glaciaChar4 from "assets/img/factions/glacia-character-4.png"

import phoenix from "assets/img/home/phoenix.png"
import dragon from "assets/img/home/dragon.png"
import wolf from "assets/img/home/wolf.png"
import gate from "assets/img/home/separator-faction.png"

import ModalFactions from "./modal/modal-factions"
import { useScrollAnim } from "components/hooks/hooks"
import AvarikTitle from "components/avarik-saga/avarik-title"

const data = [
    {
        name: "Ignis",
        description: "The feisty Ignis proudly bear their faction’s fire insignia. Much like the scorching desert they call home, they are the life and soul of any party - an Ignis never backs down from a challenge.",
        img: ignis,
        characterTop1: ignisChar2,
        characterTop2: ignisChar1,
        characterTop3: ignisChar3,
        characterTop4: ignisChar4,
        character: ignisChar,
    },
    {
        name: "Glacia",
        img: glacia,
        description: "The fluid Glacians may seem delicate, but fragile they are not. Ambitious and always striking with precision, they move with meaning and carry the grace of a floating snowflake.",
        characterTop1: glaciaChar1,
        characterTop2: glaciaChar2,
        characterTop3: glaciaChar3,
        characterTop4: glaciaChar4,
        character: glaciaChar,
    },
    {
        name: "Terra",
        img: terra,
        description: "Vowing to be true friends of Nature, the benevolent Terrans’ loyalties to their insignia are as sturdy as their resolve; they will stand their ground no matter what stands before them.",
        characterTop1: terraChar1,
        characterTop2: terraChar2,
        characterTop3: terraChar3,
        characterTop4: terraChar4,
        character: terraChar,
    },
    {
        name: "Tenebris",
        img: tenebris,
        description: " Little is known of the Tenebris, a faction of mysterious beings said to have made a pact with the Dark World which aids them in achieving their deepest desires. Where others drown in the darkness, the Tenebris thrives.",
        characterTop1: tenebrisChar1,
        characterTop2: tenebrisChar2,
        characterTop3: tenebrisChar3,
        characterTop4: tenebrisChar4,
        character: tenebrisChar,
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
                <img src={wolf} className="wolf" alt="" />
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
                                    <img src={item.img} className={`img-fluid mb-4 ${anim(i + 5, "revealInDown")}`} alt={item.name} />
                                    <h5 className={anim(i + 6)}>{item.name}</h5>
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
