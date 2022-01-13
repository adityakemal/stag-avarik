import knightIcon from "assets/img/common/icon_knight.png"
import marksmanIcon from "assets/img/common/icon_marksmen.png"
import wizardIcon from "assets/img/common/icon_wizard.png"
import knight from "assets/img/knights/knight-character.png"
import marksman from "assets/img/marksmen/marksman-character.png"
import wizard from "assets/img/wizards/wizard-character.png"
import AvarikCards from "components/avarik-saga/avarik-cards"
import { useScrollAnim } from "components/hooks/hooks"
import { useState } from "react"
import { Parallax } from "react-scroll-parallax"

const indicator = [
    {
        name: "Knight",
        image: knightIcon,
        char: knight,
        description: "Each pledging their allegiance to their own faction, the courageous Knights have survived lethal battles and weathered the worst of storms in this world consumed by indulgence, oppression, and vengeance."
    },
    {
        name: "Wizard",
        image: wizardIcon,
        char: wizard,
        description: "Known as the paragon of magic, the Wizards are a devoted class who dedicate their entire lives to the pursuit of arcane knowledge and mastery. It is their sole resolve to remain superior amid the greedy and the wicked in this realm."
    },
    {
        name: "Marksman",
        image: marksmanIcon,
        char: marksman,
        description: "Though they fight the wars from an unseen distance, one must never overlook them, for they are constantly plotting devious schemes and crafting wily ruses. The Marksmen of Avarik are a snarky, cunning bunch whose aim is always true."
    },
]

const ClassMain = () => {
    const [trigger, anim] = useScrollAnim()
    const [selectedFaction, setSelectedFaction] = useState(indicator[0])
    return (
        <section className={`sc-class-main cover-full ${selectedFaction.name.toLowerCase()}`} ref={trigger}>
            <div className="py-main h-100">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-4 col-text">
                            <h5 className={`label ${anim(1)}`}>Class</h5>
                            <h1 className={`title ${anim(2)}`}>{selectedFaction.name}</h1>
                            <p className={`description ${anim(3)}`}>
                                {selectedFaction.description}
                            </p>
                        </div>
                        <div className="col-8 col-img">
                            <Parallax className="parallax-character" x={[30, 0]} tagOuter="figure">
                                <img
                                    src={selectedFaction.char}
                                    className={`character ${anim(4, "revealInDown")}`}
                                    alt=""
                                />
                            </Parallax>
                        </div>
                    </div>
                    <div className="row row-indicator">
                        {indicator.map((item) => (
                            <AvarikCards
                                label={item.name}
                                image={item.image}
                                className="mx-4"
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

export default ClassMain