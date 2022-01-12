import knight from "assets/img/common/icon_knight.png"
import wizard from "assets/img/common/icon_wizard.png"
import marksman from "assets/img/common/icon_marksmen.png"
import bgCard from "assets/img/common/bg_card-avarik.png"
import { useScrollAnim } from "components/hooks/hooks"
import AvarikCards from "components/avarik-saga/avarik-cards"
import ModalClasses from "./modal/modal-classes"
import { useState } from "react"
import knightsCommonImg from "assets/img/knights/char_common.jpg"
import knightsUncommonImg from "assets/img/knights/char_uncommon.jpg"
import knightsRareImg from "assets/img/knights/char_rare.jpg"
import knightsEpicImg from "assets/img/knights/char_epic.jpg"
import wizardsCommonImg from "assets/img/wizards/char_common.jpg"
import wizardsUncommonImg from "assets/img/wizards/char_uncommon.jpg"
import wizardsRareImg from "assets/img/wizards/char_rare.jpg"
import wizardsEpicImg from "assets/img/wizards/char_epic.jpg"
import marksmenCommonImg from "assets/img/marksmen/char_common.jpg"
import marksmenUncommonImg from "assets/img/marksmen/char_uncommon.jpg"
import marksmenRareImg from "assets/img/marksmen/char_rare.jpg"
import marksmenEpicImg from "assets/img/marksmen/char_epic.jpg"

const data = [
    {
        name: "Knight",
        icon: knight,
        type: [
            {
                title: "Squire",
                id: "squire",
                text: "There's more to knighthood than making a mark on the battlefield, like loyalty and chivalry that all Squires possess.",
                img: knightsCommonImg,
                population: {
                    number: "1,656",
                    percentage: "18.63%",
                    type: "Common",
                },
            },
            {
                title: "Swordman",
                id: "swordman",
                text: "Take charge and command your garrison as a true, dependable Swordmans hungry for glory and gore.",
                img: knightsUncommonImg,
                population: {
                    number: "1,150",
                    percentage: "12.94%",
                    type: "Uncommon",
                },
            },
            {
                title: "Knight",
                id: "knight",
                text: "A title of honour only bestowed to the worthy - roam the lands with your kins to expand your territory.",
                img: knightsRareImg,
                population: {
                    number: "140",
                    percentage: "1.58%",
                    type: "Rare",
                },
            },
            {
                title: "Legendary Knights",
                id: "legendary-knight",
                text: "Highly coveted Legendary Knights radiate fearsome auras that will stun even the mightiest of Avarik.",
                img: knightsEpicImg,
                population: {
                    number: "16",
                    percentage: "0.18%",
                    type: "Legendary",
                },
            },
        ]
    },
    {
        name: "Wizard",
        icon: wizard,
        type: [
            {
                title: "Mage",
                id: "mage",
                text: "Mages have devoted their lives to the study and practice of the mystique. An experienced mage can be a deadly force to reckon with.",
                img: wizardsCommonImg,
                population: {
                    number: "1,612",
                    percentage: "18.13%",
                    type: "Common",
                },
            },
            {
                title: "Sorcerer",
                id: "sorcerer",
                text: "Seers of Avarik who choose to hide their mysterious powers for themselves, born out of sacred unions of spirits.",
                img: wizardsUncommonImg,
                population: {
                    number: "1,186",
                    percentage: "13.34%",
                    type: "Uncommon",
                },
            },
            {
                title: "Wizard",
                id: "wizard",
                text: "Their frenzied dabbles in the supernatural grants them power that transcends the rules of the universe.",
                img: wizardsRareImg,
                population: {
                    number: "140",
                    percentage: "1.58%",
                    type: "Rare",
                },
            },
            {
                title: "Legendary Wizard",
                id: "legendary-wizard",
                text: "Born with intelligence and wreathed in Spiritual powers, Legendary Wizards have the power to create and destroy fabrics of Nature and strings of Fate.",
                img: wizardsEpicImg,
                population: {
                    number: "16",
                    percentage: "0.18%",
                    type: "Legendary",
                },
            },
        ]
    },
    {
        name: "Marksman",
        icon: marksman,
        type: [
            {
                title: "Archer",
                id: "archer",
                text: "With uncanny senses and sharp wit, Archers are the feared, invisible enemy most would first warn newcomers about.",
                img: marksmenCommonImg,
                population: {
                    number: "1,621",
                    percentage: "18.23%",
                    type: "Common",
                },
            },
            {
                title: "Fletcher",
                id: "fletcher",
                text: "Masters of their own craft, Fletchers know what it takes for an arrow to always hit its target.",
                img: marksmenUncommonImg,
                population: {
                    number: "1,195",
                    percentage: "13.44%",
                    type: "Uncommon",
                },
            },
            {
                title: "Marksman",
                id: "marksman",
                text: "Seasoned warriors and assassins of the land, stealthy Marksman are rarely noticed, until their target falls.",
                img: marksmenRareImg,
                population: {
                    number: "140",
                    percentage: "1.58%",
                    type: "Rare",
                },
            },
            {
                title: "Legendary Marksman",
                id: "legendary-marksman",
                text: "Legendary Marksman have the blessings of the True Aim, amplified even more with first-rate tools; their arrogance with the bows and arrows is not without reason.",
                img: marksmenEpicImg,
                population: {
                    number: "16",
                    percentage: "0.18%",
                    type: "Legendary",
                },
            },
        ]
    }
]

const HomeClasses = () => {
    const [trigger, anim] = useScrollAnim()
    const [modal, setModal] = useState(null)
    const [selectedClasses, setSelectedClasses] = useState(null)
    return (
        <section className="sc-home-classes" ref={trigger}>
            <ModalClasses modal={modal} setModal={setModal} selectedClasses={selectedClasses} />
            <div className="pt-5 pb-main">
                <div className="container mx-auto mw-lg">
                    <h1 className={`title ${anim(1)}`}>Classes</h1>
                    <p className={`description mx-auto mb-5 ${anim(2)}`}>
                        From chivalrous knights to notorious wizards and cunning marksmen, these 3 classes in the Avarik Kingdom have to work hand-in-hand to achieve glory.
                    </p>
                    <div className="row row-content">
                        {data.map((item, i) => (
                            <div className="col-md-4 col-item" key={i}>
                                <AvarikCards
                                    image={item.icon}
                                    imgClassName={`icon ${anim(3)}`}
                                    label={item.name}
                                    onClick={() => {
                                        setSelectedClasses(item)
                                        setModal("modal-classes")
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeClasses