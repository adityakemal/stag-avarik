import knightIcon from "assets/img/common/icon_knight.png"
import marksmanIcon from "assets/img/common/icon_marksmen.png"
import wizardIcon from "assets/img/common/icon_wizard.png"
import knight from "assets/img/knights/armor_legendary.jpg"
import marksman from "assets/img/marksmen/armor_legendary.jpg"
import wizard from "assets/img/wizards/armor_legendary.jpg"
import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikCards from "components/avarik-saga/avarik-cards"
import { useScrollAnim } from "components/hooks/hooks"
import { useState } from "react"

const indicator = [
  {
    name: "Knight",
    image: knightIcon,
    char: knight,
    description: "Armors hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for armors. The rarity influences 2 key principles in the game: Greater base stats on the armor. Enhances the skill power of both active and passive skills of the Hero."
  },
  {
    name: "Weapon",
    image: wizardIcon,
    char: wizard,
    description: "Armors hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for armors. The rarity influences 2 key principles in the game: Greater base stats on the armor. Enhances the skill power of both active and passive skills of the Hero."
  },
  {
    name: "Marksman",
    image: marksmanIcon,
    char: marksman,
    description: "Armors hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for armors. The rarity influences 2 key principles in the game: Greater base stats on the armor. Enhances the skill power of both active and passive skills of the Hero."
  },
]

const ArmorsMain = () => {
  const [trigger, anim] = useScrollAnim()
  const [selectedFaction, setSelectedFaction] = useState(indicator[0])
  return (
    <section className={`sc-armors-main cover-full ${selectedFaction.name.toLowerCase()}`} ref={trigger}>
      <div className="py-main h-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-4 col-text">
              <h5 className={`label ${anim(1)}`}>Equipment</h5>
              <h1 className={`title ${anim(2)}`}>{selectedFaction.name}</h1>
              <p className={`description ${anim(3)}`}>
                {selectedFaction.description}
              </p>
              <AvarikButton
                text="Watch Armors Trailer"
                link="https://youtu.be/aGgHFL2Nbd4"
                target="_blank"
              />
            </div>
            <div className="col-8 col-img">
              <img
                src={selectedFaction.char}
                className={`character ${anim(4, "revealInDown")}`}
                alt=""
              />
            </div>
          </div>
          <div className="row row-indicator">
            {indicator.map((item) => (
              <AvarikCards
                label={item.name}
                image={item.image}
                imgClassName="indicator-img"
                className="mx-4"
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

export default ArmorsMain