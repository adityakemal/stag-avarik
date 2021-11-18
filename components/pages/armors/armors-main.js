import React, { useState } from "react"

import { Button, Image, Modal, Link } from "components/anti"

import { useScrollAnim } from "components/hooks/hooks"

import knightsIconLight from "assets/img/knights/icon_light.png"
import knightsIconDark from "assets/img/knights/icon_dark.png"
import knightsImg1 from "assets/img/knights/armor_uncommon.jpg"
import knightsImg2 from "assets/img/knights/armor_legendary.jpg"
import knightsCommonImg from "assets/img/knights/armor_common.jpg"
import knightsUncommonImg from "assets/img/knights/armor_uncommon.jpg"
import knightsRareImg from "assets/img/knights/armor_rare.jpg"
import knightsLegendaryImg from "assets/img/knights/armor_legendary.jpg"

import wizardsIconLight from "assets/img/wizards/icon_light.png"
import wizardsIconDark from "assets/img/wizards/icon_dark.png"
import wizardsImg1 from "assets/img/wizards/armor_common.jpg"
import wizardsImg2 from "assets/img/wizards/armor_legendary.jpg"
import wizardsCommonImg from "assets/img/wizards/armor_common.jpg"
import wizardsUncommonImg from "assets/img/wizards/armor_uncommon.jpg"
import wizardsRareImg from "assets/img/wizards/armor_rare.jpg"
import wizardsLegendaryImg from "assets/img/wizards/armor_legendary.jpg"

import marksmenIconLight from "assets/img/marksmen/icon_light.png"
import marksmenIconDark from "assets/img/marksmen/icon_dark.png"
import marksmenImg1 from "assets/img/marksmen/armor_rare.jpg"
import marksmenImg2 from "assets/img/marksmen/armor_legendary.jpg"
import marksmenCommonImg from "assets/img/marksmen/armor_common.jpg"
import marksmenUncommonImg from "assets/img/marksmen/armor_uncommon.jpg"
import marksmenRareImg from "assets/img/marksmen/armor_rare.jpg"
import marksmenLegendaryImg from "assets/img/marksmen/armor_legendary.jpg"

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
    title: "Knight's Armors",
    titleIconLight: knightsIconLight,
    titleIconDark: knightsIconDark,
    text: "A symbol of defense, honor, and courage, the Knight’s Armor protects the mighty warrior as they fight ferociously.",
    modalId: "modal-knights",
    img1: knightsImg1,
    img2: knightsImg2,
    rarities: [
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
  }

  const character2 = {
    order: false,
    id: "wizard",
    title: "Wizard's Armors",
    titleIconLight: wizardsIconLight,
    titleIconDark: wizardsIconDark,
    text: "Magical Robes and Cloaks with an affinity for considerable magical presence that will serve as magical protection.",
    modalId: "modal-wizards",
    img1: wizardsImg1,
    img2: wizardsImg2,
    rarities: [
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
  }

  const character3 = {
    order: true,
    id: "marksman",
    title: "Marksman's Armors",
    titleIconLight: marksmenIconLight,
    titleIconDark: marksmenIconDark,
    text: "Specially built to accommodate the nimble Marksmen and their sprightly attacks, these Armors must also defend them for their angry foes.",
    modalId: "modal-marksmen",
    img1: marksmenImg1,
    img2: marksmenImg2,
    rarities: [
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
  }

  return (
    <section className="sc-main sc-dark sc-rarity pb-main" ref={trigger}>
      <div className="container">
        <Link to="/" className="logo mb-md-5">
          <img src={logoMain} className={`img-fluid ${anim(1)}`} alt="Logo" />
        </Link>

        <div className="heading">
          <h2 className={anim(1)}>The Armors</h2>
        </div>

        <div className={`box box-dark text-center ${anim(2)}`}>
          <div className="box-inner">
            <div className="content">
              <p className="mw-lg mx-auto mb-5">
                Armors hold rarities similar to the model for Avarik Heroes
                themselves. There are 4 rarities for armors. The rarity
                influences 2 key principles in the game: Greater base stats on
                the armor. Enhances the skill power of both active and passive
                skills of the Hero.
              </p>
              <div className="box-inner">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/aGgHFL2Nbd4"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section ref={trigger1} className="mb-3">
          <div className={`box ${anim1(2)} box-rarity box-${character1.id}`}>
            <div className="box-inner">
              <div className="content">
                <div className="row row-3">
                  <div
                    className={`col-lg-4 col-text ${character1.order && "order-lg-last"
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
                    className={`col-lg-8 ${character1.order && "order-lg-first"
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
                    className={`col-lg-4 col-text ${character2.order && "order-lg-last"
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
                    className={`col-lg-8 ${character2.order && "order-lg-first"
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
                    className={`col-lg-4 col-text ${character3.order && "order-lg-last"
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
                    className={`col-lg-8 ${character3.order && "order-lg-first"
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
