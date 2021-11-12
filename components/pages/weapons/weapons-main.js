import React, { useState } from "react"

import { Button, Image, Modal, Link } from "components/anti"

import { useScrollAnim } from "components/hooks/hooks"

import knightsIconLight from "assets/img/knights/icon_light.png"
import knightsIconDark from "assets/img/knights/icon_dark.png"
import knightsImg1 from "assets/img/knights/weapon_uncommon.jpg"
import knightsImg2 from "assets/img/knights/weapon_legendary.jpg"
import knightsCommonImg from "assets/img/knights/weapon_common.jpg"
import knightsUncommonImg from "assets/img/knights/weapon_uncommon.jpg"
import knightsRareImg from "assets/img/knights/weapon_rare.jpg"
import knightsLegendaryImg from "assets/img/knights/weapon_legendary.jpg"

import wizardsIconLight from "assets/img/wizards/icon_light.png"
import wizardsIconDark from "assets/img/wizards/icon_dark.png"
import wizardsImg1 from "assets/img/wizards/weapon_common.jpg"
import wizardsImg2 from "assets/img/wizards/weapon_legendary.jpg"
import wizardsCommonImg from "assets/img/wizards/weapon_common.jpg"
import wizardsUncommonImg from "assets/img/wizards/weapon_uncommon.jpg"
import wizardsRareImg from "assets/img/wizards/weapon_rare.jpg"
import wizardsLegendaryImg from "assets/img/wizards/weapon_legendary.jpg"

import marksmenIconLight from "assets/img/marksmen/icon_light.png"
import marksmenIconDark from "assets/img/marksmen/icon_dark.png"
import marksmenImg1 from "assets/img/marksmen/weapon_rare.jpg"
import marksmenImg2 from "assets/img/marksmen/weapon_legendary.jpg"
import marksmenCommonImg from "assets/img/marksmen/weapon_common.jpg"
import marksmenUncommonImg from "assets/img/marksmen/weapon_uncommon.jpg"
import marksmenRareImg from "assets/img/marksmen/weapon_rare.jpg"
import marksmenLegendaryImg from "assets/img/marksmen/weapon_legendary.jpg"

import logoMain from "assets/img/common/logo_main-title.png"

const WeaponsMain = () => {
  const [modal, setModal] = useState(null)
  const [trigger, anim] = useScrollAnim()
  const [trigger1, anim1] = useScrollAnim()
  const [trigger2, anim2] = useScrollAnim()
  const [trigger3, anim3] = useScrollAnim()

  const character1 = {
    order: true,
    id: "knight",
    title: "Knight's Weapons",
    titleIconLight: knightsIconLight,
    titleIconDark: knightsIconDark,
    text: "A weapon of varying weight, strength and agility, Knights’ weapons are lethal in the right hands of those who strike fast, unnerved by death.",
    modalId: "modal-knights",
    img1: knightsImg1,
    img2: knightsImg2,
    rarities: [
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
    ],
  }

  const character2 = {
    order: false,
    id: "wizard",
    title: "Wizard's Weapons",
    titleIconLight: wizardsIconLight,
    titleIconDark: wizardsIconDark,
    text: "Mysterious items imbued with magical energy that awakens a Wizard’s sorcery gift and channels different levels and types of Mana for destructive, dark, or elusive powers.",
    modalId: "modal-wizards",
    img1: wizardsImg1,
    img2: wizardsImg2,
    rarities: [
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
  }

  const character3 = {
    order: true,
    id: "marksman",
    title: "Marksman's Weapons",
    titleIconLight: marksmenIconLight,
    titleIconDark: marksmenIconDark,
    text: "The sly and sneaky Marksmen’s choice of weapon — its long range vantage and the unique craftsmanship of each weapon is critical for the different classes of masters.",
    modalId: "modal-marksmen",
    img1: marksmenImg1,
    img2: marksmenImg2,
    rarities: [
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
  }

  return (
    <section className="sc-main sc-dark sc-rarity pb-main" ref={trigger}>
      <div className="container">
        <Link to="/" className="logo mb-md-5">
          <img src={logoMain} className={`img-fluid ${anim(1)}`} alt="Logo" />
        </Link>

        <div className="heading">
          <h2 className={anim(1)}>The Weapons</h2>
        </div>

        <div className={`box box-dark text-center ${anim(2)}`}>
          <div className="box-inner">
            <div className="content">
              <p className="mw-lg mx-auto mb-0">
                Weapons and armors hold rarities similar to the model for Avarik
                Heroes themselves. There are 4 rarities for weapons and armors.
                The rarity influences 2 key principles in the game: Greater base
                stats on the weapon and armor. Enhances the skill power of both
                active and passive skills of the Hero
              </p>
            </div>
          </div>
        </div>

        <section ref={trigger1} className="mb-3">
          <div className={`box ${anim1(2)} box-rarity box-${character1.id}`}>
            <div className="box-inner">
              <div className="content">
                <div className="row row-3">
                  <div
                    className={`col-lg-4 col-text ${
                      character1.order && "order-lg-last"
                    }`}
                  >
                    <h3 className={anim1(4)}>
                      <img
                        src={character1.titleIconLight}
                        className="img-fluid"
                        alt={character1.title}
                      />
                      {character1.title}
                    </h3>
                    <p className={anim1(5)}>{character1.text}</p>
                    <div className={`d-none d-md-block ${anim1(6)}`}>
                      <Button
                        variant="outline-white"
                        onClick={() => setModal(character1.modalId)}
                      >
                        View Rarity
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`col-lg-8 ${
                      character1.order && "order-lg-first"
                    }`}
                  >
                    <div className="row">
                      <div className="col-sm-6 mb-sm-down-2">
                        <div className={`img-wrapper ${anim1(4, "fadeIn")}`}>
                          <Image
                            ratio="r-1-1"
                            src={character1.img1}
                            className={`w-100 ${anim1(4, "revealBlockInUp")}`}
                            alt={character1.title}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="img-wrapper">
                          <Image
                            ratio="r-1-1"
                            src={character1.img2}
                            className={`w-100 ${anim1(4, "revealBlockInUp")}`}
                            alt={character1.title}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-block d-md-none mt-3">
                      <div className={anim1(5)}>
                        <Button
                          variant="outline-white"
                          onClick={() => setModal(character1.modalId)}
                          className="w-100"
                        >
                          View Rarity
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            id={character1.modalId}
            isShowing={modal}
            className={`modal-rarity modal-lg ${character1.modalId}`}
            hide={() => setModal(null)}
          >
            <div className="modal-inner-content">
              <h4 className="h3 fadeInUp">
                <img
                  src={character1.titleIconDark}
                  className="img-fluid"
                  alt={character1.title}
                />
                {character1.title}
              </h4>
              {character1.rarities.map((rarity, i) => {
                return (
                  <div className={`rarity-item fadeIn d${i + 1}`}>
                    <div className="row" key={i}>
                      <div className="col-md-4 col-image">
                        <div className="img-wrapper">
                          <Image
                            ratio="r-1-1"
                            src={rarity.img}
                            className={`w-100 revealInUp d${i + 2}`}
                            alt={rarity.title}
                          />
                        </div>
                      </div>
                      <div className="col-md-8 col-text">
                        <h5 className={`h4 fadeInUp d${i + 2}`}>
                          {rarity.title}
                        </h5>
                        <p className={`fadeInUp d${i + 3}`}>{rarity.text}</p>
                        {rarity.population && (
                          <p className={`mb-0 fadeInUp d${i + 4}`}>
                            <div className="rarity-level">
                              <div className="content">
                                {rarity.population.type}
                              </div>
                            </div>{" "}
                            <strong>{rarity.population.number}</strong>
                            {rarity.population.percentage}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Modal>
        </section>

        <section ref={trigger2} className="mb-3">
          <div className={`box ${anim2(2)} box-rarity box-${character2.id}`}>
            <div className="box-inner">
              <div className="content">
                <div className="row row-3">
                  <div
                    className={`col-lg-4 col-text ${
                      character2.order && "order-lg-last"
                    }`}
                  >
                    <h3 className={anim2(4)}>
                      <img
                        src={character2.titleIconLight}
                        className="img-fluid"
                        alt={character2.title}
                      />
                      {character2.title}
                    </h3>
                    <p className={anim2(5)}>{character2.text}</p>
                    <div className={`d-none d-md-block ${anim2(6)}`}>
                      <Button
                        variant="outline-white"
                        onClick={() => setModal(character2.modalId)}
                      >
                        View Rarity
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`col-lg-8 ${
                      character2.order && "order-lg-first"
                    }`}
                  >
                    <div className="row">
                      <div className="col-sm-6 mb-sm-down-2">
                        <div className={`img-wrapper ${anim2(4, "fadeIn")}`}>
                          <Image
                            ratio="r-1-1"
                            src={character2.img1}
                            className={`w-100 ${anim2(4, "revealBlockInUp")}`}
                            alt={character2.title}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="img-wrapper">
                          <Image
                            ratio="r-1-1"
                            src={character2.img2}
                            className={`w-100 ${anim2(4, "revealBlockInUp")}`}
                            alt={character2.title}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-block d-md-none mt-3">
                      <div className={anim2(5)}>
                        <Button
                          variant="outline-white"
                          onClick={() => setModal(character2.modalId)}
                          className="w-100"
                        >
                          View Rarity
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            id={character2.modalId}
            isShowing={modal}
            className={`modal-rarity modal-lg ${character2.modalId}`}
            hide={() => setModal(null)}
          >
            <div className="modal-inner-content">
              <h4 className="h3 fadeInUp">
                <img
                  src={character2.titleIconDark}
                  className="img-fluid"
                  alt={character2.title}
                />
                {character2.title}
              </h4>
              {character2.rarities.map((rarity, i) => {
                return (
                  <div className={`rarity-item fadeIn d${i + 1}`}>
                    <div className="row" key={i}>
                      <div className="col-md-4 col-image">
                        <div className="img-wrapper">
                          <Image
                            ratio="r-1-1"
                            src={rarity.img}
                            className={`w-100 revealInUp d${i + 2}`}
                            alt={rarity.title}
                          />
                        </div>
                      </div>
                      <div className="col-md-8 col-text">
                        <h5 className={`h4 fadeInUp d${i + 2}`}>
                          {rarity.title}
                        </h5>
                        <p className={`fadeInUp d${i + 3}`}>{rarity.text}</p>
                        {rarity.population && (
                          <p className={`mb-0 fadeInUp d${i + 4}`}>
                            <div className="rarity-level">
                              <div className="content">
                                {rarity.population.type}
                              </div>
                            </div>{" "}
                            <strong>{rarity.population.number}</strong>
                            {rarity.population.percentage}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Modal>
        </section>

        <section ref={trigger3}>
          <div className={`box ${anim3(2)} box-rarity box-${character3.id}`}>
            <div className="box-inner">
              <div className="content">
                <div className="row row-3">
                  <div
                    className={`col-lg-4 col-text ${
                      character3.order && "order-lg-last"
                    }`}
                  >
                    <h3 className={anim3(4)}>
                      <img
                        src={character3.titleIconLight}
                        className="img-fluid"
                        alt={character3.title}
                      />
                      {character3.title}
                    </h3>
                    <p className={anim3(5)}>{character3.text}</p>
                    <div className={`d-none d-md-block ${anim3(6)}`}>
                      <Button
                        variant="outline-white"
                        onClick={() => setModal(character3.modalId)}
                      >
                        View Rarity
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`col-lg-8 ${
                      character3.order && "order-lg-first"
                    }`}
                  >
                    <div className="row">
                      <div className="col-sm-6 mb-sm-down-2">
                        <div className={`img-wrapper ${anim3(4, "fadeIn")}`}>
                          <Image
                            ratio="r-1-1"
                            src={character3.img1}
                            className={`w-100 ${anim3(4, "revealBlockInUp")}`}
                            alt={character3.title}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="img-wrapper">
                          <Image
                            ratio="r-1-1"
                            src={character3.img2}
                            className={`w-100 ${anim3(4, "revealBlockInUp")}`}
                            alt={character3.title}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-block d-md-none mt-3">
                      <div className={anim3(5)}>
                        <Button
                          variant="outline-white"
                          onClick={() => setModal(character3.modalId)}
                          className="w-100"
                        >
                          View Rarity
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            id={character3.modalId}
            isShowing={modal}
            className={`modal-rarity modal-lg ${character3.modalId}`}
            hide={() => setModal(null)}
          >
            <div className="modal-inner-content">
              <h4 className="h3 fadeInUp">
                <img
                  src={character3.titleIconDark}
                  className="img-fluid"
                  alt={character3.title}
                />
                {character3.title}
              </h4>
              {character3.rarities.map((rarity, i) => {
                return (
                  <div className={`rarity-item fadeIn d${i + 1}`}>
                    <div className="row" key={i}>
                      <div className="col-md-4 col-image">
                        <div className="img-wrapper">
                          <Image
                            ratio="r-1-1"
                            src={rarity.img}
                            className={`w-100 revealInUp d${i + 2}`}
                            alt={rarity.title}
                          />
                        </div>
                      </div>
                      <div className="col-md-8 col-text">
                        <h5 className={`h4 fadeInUp d${i + 2}`}>
                          {rarity.title}
                        </h5>
                        <p className={`fadeInUp d${i + 3}`}>{rarity.text}</p>
                        {rarity.population && (
                          <p className={`mb-0 fadeInUp d${i + 4}`}>
                            <div className="rarity-level">
                              <div className="content">
                                {rarity.population.type}
                              </div>
                            </div>{" "}
                            <strong>{rarity.population.number}</strong>
                            {rarity.population.percentage}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Modal>
        </section>
      </div>
    </section>
  )
}

export default WeaponsMain
