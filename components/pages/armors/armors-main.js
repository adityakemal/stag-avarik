import { useScrollAnim } from "components/hooks/hooks"
import { Slider } from "components/anti"
import AvarikTitle from "components/avarik-saga/avarik-title"

import book from "assets/img/common/book.png"
import logoLight from "assets/img/knights/icon_light.png"
import knightIcon from "assets/img/common/icon_knight.png"
import marksmanIcon from "assets/img/common/icon_marksmen.png"
import wizardIcon from "assets/img/common/icon_wizard.png"
import knight from "assets/img/armors/armors-knight.png"
import wizard from "assets/img/armors/armors-wizard.png"
import marksman from "assets/img/armors/armors-marksman.png"
import arrowRight from "assets/img/common/arrow-right.png"

import knightsCommonImg from "assets/img/knights/armor_common.jpg"
import knightsUncommonImg from "assets/img/knights/armor_uncommon.jpg"
import knightsRareImg from "assets/img/knights/armor_rare.jpg"
import knightsLegendaryImg from "assets/img/knights/armor_legendary.jpg"
import wizardsCommonImg from "assets/img/wizards/armor_common.jpg"
import wizardsUncommonImg from "assets/img/wizards/armor_uncommon.jpg"
import wizardsRareImg from "assets/img/wizards/armor_rare.jpg"
import wizardsLegendaryImg from "assets/img/wizards/armor_legendary.jpg"
import marksmenCommonImg from "assets/img/marksmen/armor_common.jpg"
import marksmenUncommonImg from "assets/img/marksmen/armor_uncommon.jpg"
import marksmenRareImg from "assets/img/marksmen/armor_rare.jpg"
import marksmenLegendaryImg from "assets/img/marksmen/armor_legendary.jpg"
import ModalRarity from "components/avarik-saga/modal-rarity"
import { useState } from "react"
import AvarikButton from "components/avarik-saga/avarik-button"

const data = [
  {
    name: "Knight",
    icon: knightIcon,
    image: knight,
    description: "A symbol of defense, honor, and courage, the Knight’s Armor protects the mighty warrior as they fight ferociously.",
    rarity: [
      {
        title: "Common Armors",
        text: "The Knight’s Common Armor is beset with bloody myths and deep-rooted history. Its immense durability allows it’s Knight in shining armor to throw devastating punches",
        img: knightsCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Armors",
        text: "The Uncommon Knight Armor is the symbol of hope and resilience of a swift Knight who fights with wit.",
        img: knightsUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Armors",
        text: "The Rare Armor is made for the Knight’s shining glory, fiery strength, and immense speed that is amplified a hundred-fold.",
        img: knightsRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Armors",
        text: "Forged by the smithing God himself, one look at the Legendary Armor will bring any foe weak on their knees.",
        img: knightsLegendaryImg,
        population: {
          type: "Legendary",
        },
      },
    ],
  },
  {
    name: "Wizard",
    icon: wizardIcon,
    image: wizard,
    description: "Magical Robes and Cloaks with an affinity for considerable magical presence that will serve as magical protection.",
    rarity: [
      {
        title: "Common Armors",
        text: "The Wizard’s Common Robe has been passed down from generations fashioned from elven leather that holds mysterious magical defense.",
        img: wizardsCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Armors",
        text: "The Uncommon Robe can dispel a wide range of attacks and reduce its damage to the veiled Wizard.",
        img: wizardsUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Armors",
        text: "Made from the power of darkness, the Rare Robe shrouds the Wizard in mystical darkness. When the sun goes down, they turn invisible.",
        img: wizardsRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Armors",
        text: "A Legendary Robe made from the indestructibletentacle skin of the Kraken that is the ultimate defense against physical and magical attacks.",
        img: wizardsLegendaryImg,
        population: {
          type: "Legendary",
        },
      },
    ],
  },
  {
    name: "Marksman",
    icon: marksmanIcon,
    image: marksman,
    description: "Specially built to accommodate the nimble Marksmen and their sprightly attacks, these Armors must also defend them for their angry foes.",
    rarity: [
      {
        title: "Common Armors",
        text: "An efficient comfortable Common Armor, excellentfor camouflage and stealthy movements of agile marksmen.",
        img: marksmenCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Armors",
        text: "A protective coat of arms with no room forweak spots, the Marksmen’s Uncommon Armor is slightly heavy but shields against most classes.",
        img: marksmenUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Armors",
        text: "Light and silent as a feather, with discreet silhouette day or night, the Rare Marksmen Armor is indispensable for seasoned marksmen to execute stealth or guerrilla attacks.",
        img: marksmenRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Armors",
        text: "A daunting Legendary Armor that will unnerveall enemies, it serves as a taunt to all unworthy foes. Crafted with a rare metal of the lands by an ancient master, this armor protects from all types of attacks and cuts the damage significantly.",
        img: marksmenLegendaryImg,
        population: {
          type: "Legendary",
        },
      },
    ],
  },
]


const ArmorsMain = () => {
  const [trigger, anim] = useScrollAnim()
  const [modal, setModal] = useState(null)
  const [selectedArmors, setSelectedArmors] = useState(null)
  return (
    <section className="sc-armors-main cover-full" ref={trigger}>
      <ModalRarity modal={modal} setModal={setModal} selected={selectedArmors} />
      <div className="py-main h-100">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-text">
              <AvarikTitle title="Armors" className="w-100" />
              <p className={anim(2)}>
                Armors hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for armors. The rarity influences 2 key principles in the game: Greater base stats on the armor. Enhances the skill power of both active and passive skills of the Hero.
              </p>
            </div>
            <div className="col-md-7 col-img">
              <img src={book} className="img-fluid img-book" alt="" />
              <Slider
                fade
                infinite
                arrowsMdDown={true}
                arrowsSmDown={true}
                showInitial={1}
                showXxlDown={1}
                showXlDown={1}
                showLgDown={1}
                showMdDown={1}
                showSmDown={1}
                dotsInitial={true}
                dotsXxlDown={true}
                dotsXlDown={true}
                dotsLgDown={true}
                dotsMdDown={true}
                dotsSmDown={true}
                className="book-slider"
                nextArrow={<img src={arrowRight} />}
                customPaging={(i) => (
                  <button>
                    <div className="overlay-hover" />
                    <img src={data[i].icon} className={`dots-img ${anim(i + 2)}`} />
                  </button>
                )}
              >
                {data?.map((item, i) => (
                  <div className="row book-wrapper" key={i}>
                    <div className="col-6 col-img">
                      <img src={item.image} className={`img-fluid ${anim(i + 2, "revealInDown")}`} alt="" />
                    </div>
                    <div className="col-6 col-text">
                      <AvarikTitle title={item.name} titleClassName="h4" logo={logoLight} />
                      <p className={anim(i + 4)}>{item.description}</p>
                      <AvarikButton
                        text="View Rarity"
                        className="ml-0"
                        variant="light"
                        onClick={() => {
                          setModal("modal-rarity")
                          setSelectedArmors(item)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArmorsMain