import { useScrollAnim } from "components/hooks/hooks"
import { Slider } from "components/anti"
import AvarikTitle from "components/avarik-saga/avarik-title"
import AvarikButton from "components/avarik-saga/avarik-button"
import { useState } from "react"
import ModalRarity from "components/avarik-saga/modal-rarity"

import book from "assets/img/common/book.png"
import logoLight from "assets/img/knights/icon_light.png"
import knightIcon from "assets/img/common/icon_knight.png"
import marksmanIcon from "assets/img/common/icon_marksmen.png"
import wizardIcon from "assets/img/common/icon_wizard.png"
import knight from "assets/img/weapon/weapon-knight.png"
import wizard from "assets/img/weapon/weapon-wizard.png"
import marksman from "assets/img/weapon/weapon-marksman.png"
import arrowRight from "assets/img/common/arrow-right.png"

import knightsCommonImg from "assets/img/knights/weapon_common.jpg"
import knightsUncommonImg from "assets/img/knights/weapon_uncommon.jpg"
import knightsRareImg from "assets/img/knights/weapon_rare.jpg"
import knightsLegendaryImg from "assets/img/knights/weapon_legendary.jpg"
import wizardsCommonImg from "assets/img/wizards/weapon_common.jpg"
import wizardsUncommonImg from "assets/img/wizards/weapon_uncommon.jpg"
import wizardsRareImg from "assets/img/wizards/weapon_rare.jpg"
import wizardsLegendaryImg from "assets/img/wizards/weapon_legendary.jpg"
import marksmenCommonImg from "assets/img/marksmen/weapon_common.jpg"
import marksmenUncommonImg from "assets/img/marksmen/weapon_uncommon.jpg"
import marksmenRareImg from "assets/img/marksmen/weapon_rare.jpg"
import marksmenLegendaryImg from "assets/img/marksmen/weapon_legendary.jpg"



const data = [
  {
    name: "Knight",
    icon: knightIcon,
    image: knight,
    description: "A weapon of varying weight, strength and agility, Knights’ weapons are lethal in the right hands of those who strike fast, unnerved by death.",
    rarity: [
      {
        title: "Common Weapons",
        text: "This weapon may look plain, but in the hands of skilled and crafty Knights, it has won many impossible wars and rightful victories.",
        img: knightsCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Weapons",
        text: "A balanced weapon that grants its Knight fluid movement, wind speed, and mighty blows that will bring your foe to the ground in no time.",
        img: knightsUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Weapons",
        text: "It’s origin and trade is a mystery, only that it holds a bloody history and is ready to claim more prey. The wielder of the Rare Knight Weapon is a formidable Knight that tames the most vicious monsters.",
        img: knightsRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Weapons",
        text: "The most powerful blade welded by the best craftsman and the power of the universe, a Legendary Knight Weapon perfectly encapsulates its Knight’s infinite potential and reverberates it a thousand times fold.",
        img: knightsLegendaryImg,
        population: {
          type: "Legendary",
        },
      },
    ]
  },
  {
    name: "Wizard",
    icon: wizardIcon,
    image: wizard,
    description: "Mysterious items imbued with magical energy that awakens a Wizard’s sorcery gift and channels different levels and types of Mana for destructive, dark, or elusive powers.",
    rarity: [
      {
        title: "Common Weapons",
        text: "The root of all things magic, passed down through generations from the eldest, most powerful wizards to younger, gifted disciples. ",
        img: wizardsCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Weapons",
        text: "Weapons fitting for skilled Wizards who have awakened their aptitude for the mysterious arts of magic and sorcery. ",
        img: wizardsUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Weapons",
        text: "Forged by pooling immense amounts of magic (sometimes from questionable sources), these magical items only have affinity to a select few Wizards who will not succumb to the arcane powers.",
        img: wizardsRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Weapons",
        text: "The Elders claim that these are relics with a sliver of something sinisterly immortal, lending it and its holders an infinite source of power and a peek into its otherworldly knowledge.",
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
    description: "The sly and sneaky Marksmen’s choice of weapon — its long range vantage and the unique craftsmanship of each weapon is critical for the different classes of masters.",
    rarity: [
      {
        title: "Common Weapons",
        text: "The origin of it all — a common Marksmen weapon carries the historical birth of Marksmen hunters. Who has the skills of a true Marksman?",
        img: marksmenCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Weapons",
        text: "An uncommon weapon desired by many for its precision and silence as it slices through the air — perfect for distraction or assasination.",
        img: marksmenUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Weapons",
        text: "The uncannily perfect weight and balance of these rare bows and arrows are said to be crafted by a legendary marksman, who promised an unfair advantage to its wielders.",
        img: marksmenRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Weapons",
        text: "Ripping through the air and all that stands its way, wielders of the legendary Marksman bow must be ready to harness, shoot, and aim this almighty arrow with nerves of steel.",
        img: marksmenLegendaryImg,
        population: {
          type: "Legendary",
        },
      },
    ],
  },
]


const WeaponsMain = () => {
  const [trigger, anim] = useScrollAnim()
  const [modal, setModal] = useState(false)
  const [selectedWeapons, setSelectedWeapons] = useState(null)
  return (
    <section className="sc-weapons-main cover-full" ref={trigger}>
      <ModalRarity modal={modal} setModal={setModal} selected={selectedWeapons} imgWithFrame={false} />
      <div className="py-main h-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-text">
              <AvarikTitle title="Weapons" className="w-100" variant="dark" />
              <p className={anim(2)}>
                Weapons hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for weapons. The rarity influences 2 key principles in the game: Greater base stats on the weapon. Enhances the skill power of both active and passive skills of the Hero.
              </p>
              <AvarikButton text="Buy Now on Opensea" variant="dark" link="https://opensea.io/collection/avarikweapons" />
            </div>
            <div className="col-lg-7 col-img">
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
                          setSelectedWeapons(item)
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

export default WeaponsMain