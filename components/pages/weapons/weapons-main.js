import { useState } from "react"
import { useScrollAnim, useWindowSize } from "components/hooks/hooks"
import { Slider } from "components/anti"
import AvarikTitle from "components/avarik-saga/avarik-title"
import AvarikButton from "components/avarik-saga/avarik-button"
import ModalRarity from "components/avarik-saga/modal-rarity"

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
    logo: knightLogo,
    logoDark: knightLogoDark,
    icon: knightIcon,
    image: knight,
    description: "Varying in weight, strength, and agility, these weapons can be lethal when wielded by the skillful hands of a knight: fast to strike and unnerved by death.",
    rarity: [
      {
        title: "Common Weapons",
        text: "This weapon may look plain, but in the hands of skilled and crafty Knights, it will be the key to winning impossible wars and claiming victories.",
        img: knightsCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Weapons",
        text: "A balanced weapon that grants its Knight fluidity, astounding speed, and swift blows, enough to bring any foe to the ground in a flash.",
        img: knightsUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Weapons",
        text: "Its origin remains a mystery; we know only that it's ready to claim more prey, and that its wielder is a formidable slayer of vicious monsters.",
        img: knightsRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Weapons",
        text: "Welded by the best craftsmen and nature's force, the Legendary Knight's Weapon captures infinite potential and multiples it one thousandfold.",
        img: knightsLegendaryImg,
        population: {
          type: "Legendary",
        },
      },
    ]
  },
  {
    name: "Wizard",
    logo: wizardLogo,
    logoDark: wizardLogoDark,
    icon: wizardIcon,
    image: wizard,
    description: "Mysterious items imbued with magic that can awaken a Wizard’s sorcery gift as well as channel different types of mana points to grant dark, destructive, and elusive powers.",
    rarity: [
      {
        title: "Common Weapons",
        text: "The Common Wizard Weapon is the root of all things magic. It is passed down from the wisest, most powerful wizards to their gifted disciples.",
        img: wizardsCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Weapons",
        text: "Weapons fit for the land’s most skilled Wizards who have awakened their aptitude for the mysterious arts of spell and sorcery.",
        img: wizardsUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Weapons",
        text: "Bearing immense magical power, sometimes of disreputable sources, it can only be wielded by Wizards who can resist arcane temptations.",
        img: wizardsRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Weapons",
        text: "The Elders talk of a Legendary Weapon from a sinister past, lending its bearer infinite power and a glimpse into otherworldly wisdom.",
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
    description: "The weapon of choice for the sly and sneaky Marksman flaunts long range and discretion above all. With unique craftsmanship and utter care, each weapon bears a special significance for its master.",
    rarity: [
      {
        title: "Common Weapons",
        text: "The origin of it all — a Common Marksman Weapon carries the historical birth of these cunning hunters. Who has the skills of a true Marksman?",
        img: marksmenCommonImg,
        population: {
          type: "Common",
        },
      },
      {
        title: "Uncommon Weapons",
        text: "Desired by many for its precision and silence, it sends lethal arrows slicing through the air — perfect for secret operations and assassinations.",
        img: marksmenUncommonImg,
        population: {
          type: "Uncommon",
        },
      },
      {
        title: "Rare Weapons",
        text: "The Rare Marksman Weapon embodies the peak of craftsmanship. Fashioned by a fabled marksman, it promises a formidable edge to its wielder.",
        img: marksmenRareImg,
        population: {
          type: "Rare",
        },
      },
      {
        title: "Legendary Weapons",
        text: "Ripping through the air with incredible speed, this almighty arrow yields only to those with precision in their blood and nerves of steel.",
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
  const { width } = useWindowSize()
  return (
    <section className="sc-weapons-main cover-full" ref={trigger}>
      <ModalRarity modal={modal} setModal={setModal} selected={selectedWeapons} imgWithFrame={false} />
      <div className="py-main h-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-text">
              <AvarikTitle title="Weapons" className="w-100" variant="white" logo={null} />
              <p className={anim(2)}>
                Just like our notorious Avariks, there are 4 rarity levels to the weapons in Avarik Saga. The rarity of a weapon determines its base stats, which enhances both the active and passive skills of the Hero.
              </p>
              <AvarikButton
                text="Buy Now on Opensea"
                variant="dark"
                className="d-none d-lg-flex"
                link="https://opensea.io/collection/avarikweapons"
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
                          setSelectedWeapons(item)
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
                link="https://opensea.io/collection/avarikweapons"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeaponsMain