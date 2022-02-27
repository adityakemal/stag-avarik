import { useState } from "react"
import AvarikButton from "components/avarik-saga/avarik-button"
import { useScrollAnim, useWindowSize } from "components/hooks/hooks"
import { Slider } from "components/anti"
import AvarikTitle from "components/avarik-saga/avarik-title"

import book from "assets/img/common/book.png"
import bookMobile from "assets/img/common/book-mobile.png"
import knightLogo from "assets/img/knights/icon_light.png"
import wizardLogo from "assets/img/wizards/icon_light.png"
import marksmenLogo from "assets/img/marksmen/icon_light.png"
import knightLogoDark from "assets/img/knights/icon_dark.png"
import wizardLogoDark from "assets/img/wizards/icon_dark.png"
import marksmenLogoDark from "assets/img/marksmen/icon_dark.png"
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

const data = [
  {
    name: "Knight",
    logo: knightLogo,
    logoDark: knightLogoDark,
    icon: knightIcon,
    image: knight,
    description: "A symbol of defense, honor, and courage, the Knight’s Armor protects its mighty wearer as they descend into battle ferociously.",
    rarity: [
      {
        title: "Common Armors",
        text: "The Common Knight Armor carries a bloody myth and history. Its immense durability allows its Knight to move with grace, speed, and boldness.",
        img: knightsCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Armors",
        text: "The Uncommon Knight Armor symbolizes the hope and resilience of a swift Knight who fights with wit and acuity to dominate the battlefield.",
        img: knightsUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Armors",
        text: "The Rare Armor is made to escort the Knight to his final glory, making sure that any natural strength and speed are amplified one hundredfold.",
        img: knightsRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Armors",
        text: "Forged by the Smith God himself, one look at the Legendary Armor will bring even the most formidable foe folding to their knees.",
        img: knightsLegendaryImg,
        population: {
          type: "Legendary",
        },
      },
    ],
  },
  {
    name: "Wizard",
    logo: wizardLogo,
    logoDark: wizardLogoDark,
    icon: wizardIcon,
    image: wizard,
    description: "These magical Robes and Cloaks oozes with the essence of magic, and the threads of these mythical fabric are permeated in divine enchantments.",
    rarity: [
      {
        title: "Common Armors",
        text: "Passed down through generations, the Common Wizard Robe is fashioned from elven leather and carries a magical defense that can protect its wearer.",
        img: wizardsCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Armors",
        text: "The Uncommon Robe can dispel a wide range of attacks and reduce any damage to the Wizard who dons its sophisticated silhouette.",
        img: wizardsUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Armors",
        text: "Laced with the power of darkness, the Rare Robe shrouds the Wizard in the shadows, so that they become invisible when the sun goes down.",
        img: wizardsRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Armors",
        text: "The Legendary Wizard Robe is woven from the indestructible Kraken skin, the ultimate defense against even the most vicious attacks.",
        img: wizardsLegendaryImg,
        population: {
          type: "Legendary",
        },
      },
    ],
  },
  {
    name: "Marksman",
    logo: marksmenLogo,
    logoDark: marksmenLogoDark,
    icon: marksmanIcon,
    image: marksman,
    description: "Specially fabricated to don the nimble Marksmen and their sprightly attacks, these Armors also oozes with the mystical charms to defend them from their angry foes.",
    rarity: [
      {
        title: "Common Armors",
        text: "Don’t let its simple design fool anyone, for its sleek cut and efficient silhouette is the perfect camouflage for a Marksman’s deadly stealth.",
        img: marksmenCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Armors",
        text: "A protective shield with no weak spot, the Uncommon Marksman Armor is slightly heavy but guarantees protection against most classes.",
        img: marksmenUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Armors",
        text: "Light and silent as a feather, the Rare Marksman Armor is an indispensable cloak for stealth, and grants its wearer discretion day and night.",
        img: marksmenRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Armors",
        text: "The Legendary Armor unnerves all enemies. Crafted from the rarest metal by an ancient master, it shields all attacks and curtails any damage.",
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
  const { width } = useWindowSize()
  return (
    <section className="sc-armors-main cover-full" ref={trigger}>
      <ModalRarity modal={modal} setModal={setModal} selected={selectedArmors} imgWithFrame={false} className="armors" />
      <div className="py-main h-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-text">
              <AvarikTitle title="Armors" className="w-100" variant="white" logo={null} />
              <p className={anim(2)}>
              Armors hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for armors. The rarity influences 2 key principles in the game: Greater base stats on the armor. Enhances the skill power of both active and passive skills of the Hero.
              </p>
              <AvarikButton
                text="Buy Now on Opensea"
                variant="dark"
                className="d-none d-lg-flex"
                link="https://opensea.io/collection/avarik-saga-armors"
              />
            </div>
            <div className="col-lg-7 col-img">
              <img src={width > 756 ? book : bookMobile} className="img-fluid img-book" alt="" />
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
                    {/* <div className="overlay-hover" /> */}
                    <div className="dots-btn">
                      <div className="dots-active"></div>
                      <img src={data[i].icon} className={`img-fluid ${anim(i + 2)}`} />
                    </div>
                  </button>
                )}
              >
                {data?.map((item, i) => (
                  <div className="row book-wrapper" key={i}>
                    <div className="col-md-6 col-img">
                      <img src={item.image} className={`img-fluid ${anim(i + 2, "revealInDown")}`} alt="" />
                    </div>
                    <div className="col-md-6 col-text">
                      <AvarikTitle title={item.name} titleClassName="h4" logo={item.logo} />
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
              <AvarikButton
                text="Buy Now on Opensea"
                variant="dark"
                className="btn-opensea d-flex d-lg-none"
                link="https://opensea.io/collection/avarik-saga-armors"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArmorsMain