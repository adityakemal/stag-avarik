import ignis from "assets/img/common/flag_ignis.png"
import tenebris from "assets/img/common/flag_tenebris.png"
import terra from "assets/img/common/flag_terra.png"
import glacia from "assets/img/common/flag_glacia.png"
import ignisIcon from "assets/img/factions/ignis-icon.png"
import tenebrisIcon from "assets/img/factions/tenebris-icon.png"
import terraIcon from "assets/img/factions/terra-icon.png"
import glaciaIcon from "assets/img/factions/glacia-icon.png"
import { useScrollAnim } from "components/hooks/hooks"
import AvarikCards from "components/avarik-saga/avarik-cards"
import { useState } from "react"

const indicator = [
    {
        name: "Ignis",
        image: ignisIcon,
        flag: ignis,
        description: "The feisty Ignis proudly bear their faction’s fire insignia. Much like the scorching desert they call home, they are the life and soul of any party - an Ignis never backs down from a challenge."
    },
    {
        name: "Glacia",
        image: glaciaIcon,
        flag: glacia,
        description: "The fluid Glacians may seem delicate, but fragile they are not. Ambitious and always striking with precision, they move with meaning and carry the grace of a floating snowflake."
    },
    {
        name: "Terra",
        image: terraIcon,
        flag: terra,
        description: "Vowing to be true friends of Nature, the benevolent Terrans’ loyalties to their insignia are as sturdy as their resolve; they will stand their ground no matter what stands before them."
    },
    {
        name: "Tenebris",
        image: tenebrisIcon,
        flag: tenebris,
        description: " Little is known of the Tenebris, a faction of mysterious beings said to have made a pact with the Dark World which aids them in achieving their deepest desires. Where others drown in the darkness, the Tenebris thrives."
    },
]

const FactionsMain = () => {
    const [trigger, anim] = useScrollAnim()
    const [selectedFaction, setSelectedFaction] = useState(indicator[0])
    return (
        <section className={`sc-factions-main cover-full ${selectedFaction.name.toLowerCase()}`} ref={trigger}>
            <div className="py-main h-100">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-4 col-text">
                            <h5 className={`label ${anim(1)}`}>Faction</h5>
                            <h1 className={`title ${anim(2)}`}>{selectedFaction.name}</h1>
                            <p className={`description ${anim(3)}`}>
                                {selectedFaction.description}
                            </p>
                        </div>
                        <div className="col-8 col-img">
                            <img src={selectedFaction.flag} className={`flag-factions ${anim(4, "revealInDown")}`} alt="" />
                        </div>
                    </div>
                    <div className="row row-indicator">
                        {indicator.map((item) => (
                            <AvarikCards
                                label={item.name}
                                image={item.image}
                                imgClassName="indicator-img"
                                isActive={selectedFaction === item}
                                onClick={() => setSelectedFaction(item)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FactionsMain