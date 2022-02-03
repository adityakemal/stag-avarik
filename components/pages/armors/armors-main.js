import { useScrollAnim } from "components/hooks/hooks"
import book from "assets/img/common/book.png"
import left from "assets/img/common/ornament-left.png"
import right from "assets/img/common/ornament-right.png"
import logo from "assets/img/common/logo_main-icon.png"
import logoLight from "assets/img/knights/icon_light.png"
import knightIcon from "assets/img/common/icon_knight.png"
import marksmanIcon from "assets/img/common/icon_marksmen.png"
import wizardIcon from "assets/img/common/icon_wizard.png"
import knight from "assets/img/armors/armors-knight.png"
import arrowRight from "assets/img/common/arrow-right.png"
import { Slider } from "components/anti"

const data = [
  {
    name: "Knight",
    icon: knightIcon,
    image: knight,
    description: "A symbol of defense, honor, and courage, the Knight’s Armor protects the mighty warrior as they fight ferociously."
  },
  {
    name: "Wizard",
    icon: wizardIcon,
    image: knight,
    description: "Magical Robes and Cloaks with an affinity for considerable magical presence that will serve as magical protection."
  },
  {
    name: "Marksman",
    icon: marksmanIcon,
    image: knight,
    description: "Specially built to accommodate the nimble Marksmen and their sprightly attacks, these Armors must also defend them for their angry foes."
  },
]


const ArmorsMain = () => {
  const [trigger, anim] = useScrollAnim()
  return (
    <section className="sc-armors-main" ref={trigger}>
      <div className="py-main h-100">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-text">
              <div className="title-wrapper">
                <img src={logo} className="logo" alt="" />
                <img src={left} className="left" alt="" />
                <h1 className={anim(1)}>
                  Armors
                </h1>
                <img src={right} className="right" alt="" />
              </div>
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

export default ArmorsMain