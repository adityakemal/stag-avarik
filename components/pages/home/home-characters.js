import React, { useState } from "react"

import { Button } from "components/anti/buttons/buttons"
import { Image } from "components/anti/image/image"
import { Modal } from "components/anti/modal/modal"

import { useScrollAnim } from "components/hooks/hooks"

import knightsIconLight from "assets/img/knights/icon_light.png"
import knightsIconDark from "assets/img/knights/icon_dark.png"
import knightsImg1 from "assets/img/knights/char_uncommon.jpg"
import knightsImg2 from "assets/img/knights/char_epic.jpg"
import knightsCommonImg from "assets/img/knights/char_common.jpg"
import knightsUncommonImg from "assets/img/knights/char_uncommon.jpg"
import knightsRareImg from "assets/img/knights/char_rare.jpg"
import knightsEpicImg from "assets/img/knights/char_epic.jpg"

import wizardsIconLight from "assets/img/wizards/icon_light.png"
import wizardsIconDark from "assets/img/wizards/icon_dark.png"
import wizardsImg1 from "assets/img/wizards/char_rare.jpg"
import wizardsImg2 from "assets/img/wizards/char_epic.jpg"
import wizardsCommonImg from "assets/img/wizards/char_common.jpg"
import wizardsUncommonImg from "assets/img/wizards/char_uncommon.jpg"
import wizardsRareImg from "assets/img/wizards/char_rare.jpg"
import wizardsEpicImg from "assets/img/wizards/char_epic.jpg"

import marksmenIconLight from "assets/img/marksmen/icon_light.png"
import marksmenIconDark from "assets/img/marksmen/icon_dark.png"
import marksmenImg1 from "assets/img/marksmen/char_common.jpg"
import marksmenImg2 from "assets/img/marksmen/char_epic.jpg"
import marksmenCommonImg from "assets/img/marksmen/char_common.jpg"
import marksmenUncommonImg from "assets/img/marksmen/char_uncommon.jpg"
import marksmenRareImg from "assets/img/marksmen/char_rare.jpg"
import marksmenEpicImg from "assets/img/marksmen/char_epic.jpg"

import { Element } from "react-scroll"

const HomeCharacters = () => {
  const [modal, setModal] = useState(null)
  const [trigger, anim] = useScrollAnim()
  const [trigger1, anim1] = useScrollAnim()
  const [trigger2, anim2] = useScrollAnim()
  const [trigger3, anim3] = useScrollAnim()

  const character1 = {
    order: true,
    id: "knight",
    title: "Knight",
    titleIconLight: knightsIconLight,
    titleIconDark: knightsIconDark,
    text: "Pledging their allegiance to the faction, they have survived lethal battles and weathered the worst of storms in this dark world of indulgence, oppression, and vengeance. Knights of Avarik are the very essence of chivalry, honor and courage.",
    modalId: "modal-knights",
    img1: knightsImg1,
    img2: knightsImg2,
    rarities: [
      {
        title: "Squire",
        text: "There's more to knighthood than making a mark on the battlefield, like loyalty and chivalry that all Squires possess.",
        img: knightsCommonImg,
        population: {
          number: "1,656",
          percentage: "18.63%",
          type: "Common",
        },
      },
      {
        title: "Swordman",
        text: "Take charge and command your garrison as a true, dependable Swordmans hungry for glory and gore.",
        img: knightsUncommonImg,
        population: {
          number: "1,150",
          percentage: "12.94%",
          type: "Uncommon",
        },
      },
      {
        title: "Knight",
        text: "A title of honour only bestowed to the worthy - roam the lands with your kins to expand your territory.",
        img: knightsRareImg,
        population: {
          number: "140",
          percentage: "1.58%",
          type: "Rare",
        },
      },
      {
        title: "Legendary Knights",
        text: "Highly coveted Legendary Knights radiate fearsome auras that will stun even the mightiest of Avarik.",
        img: knightsEpicImg,
        population: {
          number: "16",
          percentage: "0.18%",
          type: "Legendary",
        },
      },
    ],
  }

  const character2 = {
    order: false,
    id: "wizard",
    title: "Wizard",
    titleIconLight: wizardsIconLight,
    titleIconDark: wizardsIconDark,
    text: "Notorious as the embodiment of magic, Wizards dedicate their entire lives to the pursuit of arcane knowledge and mastery to remain superior in this murky realm of the greedy and the wicked. Wizards of Avarik possess remarkable wisdom from the Old Times and clairvoyance.",
    modalId: "modal-wizards",
    img1: wizardsImg1,
    img2: wizardsImg2,
    rarities: [
      {
        title: "Mage",
        text: "Mages have devoted their lives to the study and practice of the mystique. An experienced mage can be a deadly force to reckon with.",
        img: wizardsCommonImg,
        population: {
          number: "1,612",
          percentage: "18.13%",
          type: "Common",
        },
      },
      {
        title: "Sorcerer",
        text: "Seers of Avarik who choose to hide their mysterious powers for themselves, born out of sacred unions of spirits.",
        img: wizardsUncommonImg,
        population: {
          number: "1,186",
          percentage: "13.34%",
          type: "Uncommon",
        },
      },
      {
        title: "Wizard",
        text: "Their frenzied dabbles in the supernatural grants them power that transcends the rules of the universe.",
        img: wizardsRareImg,
        population: {
          number: "140",
          percentage: "1.58%",
          type: "Rare",
        },
      },
      {
        title: "Legendary Wizard",
        text: "Born with intelligence and wreathed in Spiritual powers, Legendary Wizards have the power to create and destroy fabrics of Nature and strings of Fate.",
        img: wizardsEpicImg,
        population: {
          number: "16",
          percentage: "0.18%",
          type: "Legendary",
        },
      },
    ],
  }

  const character3 = {
    order: true,
    id: "marksman",
    title: "Marksman",
    titleIconLight: marksmenIconLight,
    titleIconDark: marksmenIconDark,
    text: "Fighting the wars unseen from afar and always plotting devious schemes, the Marksman of Avarik are a snarky, cunning bunch who never miss their godly aim. Blessed by the Gods with wit and precision prowess, you might never sleep soundly if you offend one of them.",
    modalId: "modal-marksmen",
    img1: marksmenImg1,
    img2: marksmenImg2,
    rarities: [
      {
        title: "Archer",
        text: "With uncanny senses and sharp wit, Archers are the feared, invisible enemy most would first warn newcomers about.",
        img: marksmenCommonImg,
        population: {
          number: "1,621",
          percentage: "18.23%",
          type: "Common",
        },
      },
      {
        title: "Fletcher",
        text: "Masters of their own craft, Fletchers know what it takes for an arrow to always hit its target.",
        img: marksmenUncommonImg,
        population: {
          number: "1,195",
          percentage: "13.44%",
          type: "Uncommon",
        },
      },
      {
        title: "Marksman",
        text: "Seasoned warriors and assassins of the land, stealthy Marksman are rarely noticed, until their target falls.",
        img: marksmenRareImg,
        population: {
          number: "140",
          percentage: "1.58%",
          type: "Rare",
        },
      },
      {
        title: "Legendary Marksman",
        text: "Legendary Marksman have the blessings of the True Aim, amplified even more with first-rate tools; their arrogance with the bows and arrows is not without reason.",
        img: marksmenEpicImg,
        population: {
          number: "16",
          percentage: "0.18%",
          type: "Legendary",
        },
      },
    ],
  }

  // const characters = [
  //   {
  //     order: true,
  //     title: "Knights",
  //     titleIconLight: knightsIconLight,
  //     titleIconDark: knightsIconDark,
  //     text:
  //       "Pledging their allegiance to the faction, they have survived lethal battles and weathered the worst of storms in this dark world of indulgence, oppression, and vengeance. Knights of Avarik are the very essence of chivalry, honor and courage.",
  //     modalId: "modal-knights",
  //     img1: knightsImg1,
  //     img2: knightsImg2,
  //     rarities: [
  //       {
  //         title: "Squires",
  //         text:
  //           "There's more to knighthood than making a mark on the battlefield, like loyalty and chivalry that all Squires possess.",
  //         img: knightsCommonImg,
  //         population: {
  //           number: "1,629",
  //           percentage: "18.33%",
  //           type: "Common",
  //         },
  //       },
  //       {
  //         title: "Soldiers",
  //         text:
  //           "Take charge and command your garrison as a true, dependable Soldier hungry for glory and gore.",
  //         img: knightsUncommonImg,
  //         population: {
  //           number: "1,177",
  //           percentage: "13.24%",
  //           type: "Uncommon",
  //         },
  //       },
  //       {
  //         title: "Knights",
  //         text:
  //           "A title of honour only bestowed to the worthy - roam the lands with your kins to expand your territory.",
  //         img: knightsRareImg,
  //         population: {
  //           number: "140",
  //           percentage: "1.58%",
  //           type: "Rare",
  //         },
  //       },
  //       {
  //         title: "Legendary Knights",
  //         text:
  //           "Highly coveted Legendary Knights radiate fearsome auras that will stun even the mightiest of Avarik.",
  //         img: knightsEpicImg,
  //         population: {
  //           number: "16",
  //           percentage: "0.18%",
  //           type: "Legendary",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     order: false,
  //     title: "Wizards",
  //     titleIconLight: wizardsIconLight,
  //     titleIconDark: wizardsIconDark,
  //     text:
  //       "Notorious as the embodiment of magic, Wizards dedicate their entire lives to the pursuit of arcane knowledge and mastery to remain superior in this murky realm of the greedy and the wicked. Wizards of Avarik possess remarkable wisdom from the Old Times and clairvoyance.",
  //     modalId: "modal-wizards",
  //     img1: wizardsImg1,
  //     img2: wizardsImg2,
  //     rarities: [
  //       {
  //         title: "Mages",
  //         text:
  //           "Mages have devoted their lives to the study and practice of the mystique. An experienced mage can be a deadly force to reckon with.",
  //         img: wizardsCommonImg,
  //         population: {
  //           number: "1,629",
  //           percentage: "18.33%",
  //           type: "Common",
  //         },
  //       },
  //       {
  //         title: "Sorcerers",
  //         text:
  //           "Seers of Avarik who choose to hide their mysterious powers for themselves, born out of sacred unions of spirits.",
  //         img: wizardsUncommonImg,
  //         population: {
  //           number: "1,177",
  //           percentage: "13.24%",
  //           type: "Uncommon",
  //         },
  //       },
  //       {
  //         title: "Wizards",
  //         text:
  //           "Their frenzied dabbles in the supernatural grants them power that transcends the rules of the universe.",
  //         img: wizardsRareImg,
  //         population: {
  //           number: "140",
  //           percentage: "1.58%",
  //           type: "Rare",
  //         },
  //       },
  //       {
  //         title: "Legendary Wizards",
  //         text:
  //           "Born with intelligence and wreathed in Spiritual powers, Legendary Wizards have the power to create and destroy fabrics of Nature and strings of Fate.",
  //         img: wizardsEpicImg,
  //         population: {
  //           number: "16",
  //           percentage: "0.18%",
  //           type: "Legendary",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     order: true,
  //     title: "Marksmen",
  //     titleIconLight: marksmenIconLight,
  //     titleIconDark: marksmenIconDark,
  //     text:
  //       "Fighting the wars unseen from afar and always plotting devious schemes, the Marksmen of Avarik are a snarky, cunning bunch who never miss their godly aim. Blessed by the Gods with wit and precision prowess, you might never sleep soundly if you offend one of them.",
  //     modalId: "modal-marksmen",
  //     img1: marksmenImg1,
  //     img2: marksmenImg2,
  //     rarities: [
  //       {
  //         title: "Archers",
  //         text:
  //           "With uncanny senses and sharp wit, Archers are the feared, invisible enemy most would first warn newcomers about.",
  //         img: marksmenCommonImg,
  //         population: {
  //           number: "1,629",
  //           percentage: "18.33%",
  //           type: "Common",
  //         },
  //       },
  //       {
  //         title: "Fletchers",
  //         text:
  //           "Masters of their own craft, Fletchers know what it takes for an arrow to always hit its target.",
  //         img: marksmenUncommonImg,
  //         population: {
  //           number: "1,177",
  //           percentage: "13.24%",
  //           type: "Uncommon",
  //         },
  //       },
  //       {
  //         title: "Marksmen",
  //         text:
  //           "Seasoned warriors and assassins of the land, stealthy Marksmen are rarely noticed, until their target falls.",
  //         img: marksmenRareImg,
  //         population: {
  //           number: "140",
  //           percentage: "1.58%",
  //           type: "Rare",
  //         },
  //       },
  //       {
  //         title: "Legendary Marksmen",
  //         text:
  //           "Legendary Marksmen have the blessings of the True Aim, amplified even more with first-rate tools; their arrogance with the bows and arrows is not without reason.",
  //         img: marksmenEpicImg,
  //         population: {
  //           number: "16",
  //           percentage: "0.18%",
  //           type: "Legendary",
  //         },
  //       },
  //     ],
  //   },
  // ]

  return (
    <Element name="character-content">
      <section
        className="sc-rarity sc-dark pt-main"
        id="characters"
        ref={trigger}
      >
        <div className="container">
          <div className="heading">
            <h2 className={anim(1)}>The Characters</h2>
          </div>

          {/* {characters.map((item, i) => {
          return (
            <>
              <div className={`box ${anim(2)} box-${item.title}`} key={i}>
                <div className="box-inner">
                  <div className="content">
                    <div className="row row-3">
                      <div
                        className={`col-lg-4 col-text ${item.order &&
                          "order-lg-last"}`}
                      >
                        <h3 className={anim(4)}>
                          <img
                            src={item.titleIconLight}
                            className="img-fluid"
                            alt={item.title}
                          />
                          {item.title}
                        </h3>
                        <p className={anim(5)}>{item.text}</p>
                        <div className={`d-none d-md-block ${anim(6)}`}>
                          <Button
                            variant="outline-white"
                            onClick={() => setModal(item.modalId)}
                          >
                            View Rarity
                          </Button>
                        </div>
                      </div>
                      <div
                        className={`col-lg-8 ${item.order && "order-lg-first"}`}
                      >
                        <div className="row">
                          <div className="col-sm-6 mb-sm-down-2">
                            <div className={`img-wrapper ${anim(4, "fadeIn")}`}>
                              <Image
                                ratio="r-1-1"
                                src={item.img1}
                                className={`w-100 ${anim(
                                  4,
                                  "revealBlockInUp"
                                )}`}
                                alt={item.title}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="img-wrapper">
                              <Image
                                ratio="r-1-1"
                                src={item.img2}
                                className={`w-100 ${anim(
                                  4,
                                  "revealBlockInUp"
                                )}`}
                                alt={item.title}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-block d-md-none mt-3">
                          <div className={anim(5)}>
                            <Button
                              variant="outline-white"
                              onClick={() => setModal(item.modalId)}
                            >
                              View Rarity
                            </Button>
                          </div>
                        </div>
                        <div
                          className={`col-lg-8 ${item.order && "order-lg-first"}`}
                        >
                          <div className="row">
                            <div className="col-sm-6 mb-sm-down-2">
                              <div className={`img-wrapper ${anim(4, "fadeIn")}`}>
                                <Image
                                  ratio="r-1-1"
                                  src={item.img1}
                                  className={`w-100 ${anim(
                                    4,
                                    "revealBlockInUp"
                                  )}`}
                                  alt={item.title}
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="img-wrapper">
                                <Image
                                  ratio="r-1-1"
                                  src={item.img2}
                                  className={`w-100 ${anim(
                                    4,
                                    "revealBlockInUp"
                                  )}`}
                                  alt={item.title}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-block d-md-none mt-3">
                            <div className={anim(5)}>
                              <Button
                                variant="outline-white"
                                onClick={() => setModal(item.modalId)}
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
                  id={item.modalId}
                  isShowing={modal}
                  className={`modal-rarity modal-lg ${item.modalId}`}
                  hide={() => setModal(null)}
                >
                  <div className="modal-inner-content">
                    <h4 className="h3 fadeInUp">
                      <img
                        src={item.titleIconDark}
                        className="img-fluid"
                        alt={item.title}
                      />
                      {item.title}
                    </h4>
                    {item.rarities.map((rarity, i) => {
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
                              <p className={`fadeInUp d${i + 3}`}>
                                {rarity.text}
                              </p>
                              {rarity.population && (
                                <p className={`mb-0 fadeInUp d${i + 4}`}>
                                  <div className="rarity-level">
                                    <div className="content">
                                      {rarity.population.type}
                                    </div>
                                  </div>{" "}
                                  <strong>{rarity.population.number}</strong> (
                                  {rarity.population.percentage})
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Modal>
            </>
          )
        })} */}

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
                              <strong>{rarity.population.number}</strong> (
                              {rarity.population.percentage})
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
                              <strong>{rarity.population.number}</strong> (
                              {rarity.population.percentage})
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
                              <strong>{rarity.population.number}</strong> (
                              {rarity.population.percentage})
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
    </Element>
  )
}

export default HomeCharacters
