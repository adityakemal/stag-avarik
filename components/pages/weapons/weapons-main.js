import { useScrollAnim } from "components/hooks/hooks"
import book from "assets/img/common/book.png"
import left from "assets/img/common/ornament-left.png"
import right from "assets/img/common/ornament-right.png"
import logo from "assets/img/common/logo_main-icon.png"
import logoLight from "assets/img/knights/icon_light.png"
import knightIcon from "assets/img/common/icon_knight.png"
import marksmanIcon from "assets/img/common/icon_marksmen.png"
import wizardIcon from "assets/img/common/icon_wizard.png"
import knight from "assets/img/weapon/weapon-knight.png"
import arrowRight from "assets/img/common/arrow-right.png"
import { Slider } from "components/anti"

const data = [
  {
    name: "Knight",
    icon: knightIcon,
    image: knight,
    description: "A weapon of varying weight, strength and agility, Knights’ weapons are lethal in the right hands of those who strike fast, unnerved by death."
  },
  {
    name: "Wizard",
    icon: wizardIcon,
    image: knight,
    description: "Mysterious items imbued with magical energy that awakens a Wizard’s sorcery gift and channels different levels and types of Mana for destructive, dark, or elusive powers."
  },
  {
    name: "Marksman",
    icon: marksmanIcon,
    image: knight,
    description: "The sly and sneaky Marksmen’s choice of weapon — its long range vantage and the unique craftsmanship of each weapon is critical for the different classes of masters."
  },
]


const WeaponsMain = () => {
  const [trigger, anim] = useScrollAnim()
  return (
    <section className="sc-weapons-main cover-full" ref={trigger}>
      <div className="py-main h-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-text">
              <div className="title-wrapper">
                <img src={logo} className="logo" alt="" />
                <img src={left} className="left" alt="" />
                <h1 className={anim(1)}>
                  Weapons
                </h1>
                <img src={right} className="right" alt="" />
              </div>
              <p className={anim(2)}>
                Weapons hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for weapons. The rarity influences 2 key principles in the game: Greater base stats on the weapon. Enhances the skill power of both active and passive skills of the Hero.
              </p>
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
                      <div className="title-wrapper">
                        <img src={logoLight} className="logo" alt="" />
                        <img src={left} className="left" alt="" />
                        <h4 className={anim(i + 3)}>
                          {item.name}
                        </h4>
                        <img src={right} className="right" alt="" />
                      </div>
                      <p className={anim(i + 4)}>{item.description}</p>
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