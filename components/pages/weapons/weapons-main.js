import knightIcon from "assets/img/common/icon_knight.png"
import marksmanIcon from "assets/img/common/icon_marksmen.png"
import wizardIcon from "assets/img/common/icon_wizard.png"
import knight from "assets/img/knights/weapon_legendary.jpg"
import marksman from "assets/img/marksmen/weapon_legendary.jpg"
import wizard from "assets/img/wizards/weapon_legendary.jpg"
import AvarikCards from "components/avarik-saga/avarik-cards"
import { useScrollAnim } from "components/hooks/hooks"
import { useState } from "react"

const indicator = [
  {
    name: "Knight",
    image: knightIcon,
    char: knight,
    description: "Weapons hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for weapons. The rarity influences 2 key principles in the game: Greater base stats on the weapon. Enhances the skill power of both active and passive skills of the Hero."
  },
  {
    name: "Wizard",
    image: wizardIcon,
    char: wizard,
    description: "Weapons hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for weapons. The rarity influences 2 key principles in the game: Greater base stats on the weapon. Enhances the skill power of both active and passive skills of the Hero."
  },
  {
    name: "Marksman",
    image: marksmanIcon,
    char: marksman,
    description: "Weapons hold rarities similar to the model for Avarik Heroes themselves. There are 4 rarities for weapons. The rarity influences 2 key principles in the game: Greater base stats on the weapon. Enhances the skill power of both active and passive skills of the Hero."
  },
]

const WeaponsMain = () => {
  const [trigger, anim] = useScrollAnim()
  const [selectedFaction, setSelectedFaction] = useState(indicator[0])
  return (
    <section className={`sc-weapons-main cover-full ${selectedFaction.name.toLowerCase()}`} ref={trigger}>
      <div className="py-main h-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-4 col-text">
              <h5 className={`label ${anim(1)}`}>Equipment</h5>
              <h1 className={`title ${anim(2)}`}>{selectedFaction.name}</h1>
              <p className={`description ${anim(3)}`}>
                {selectedFaction.description}
              </p>
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

export default WeaponsMain