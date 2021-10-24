import React from "react"

import { Image } from "components/anti/image/image"
import { Slider } from "components/anti/slider/slider"
import { Social } from "components/anti/social/social"

import { useScrollAnim } from "components/hooks/hooks"

import agathaCarolina from "assets/img/team/agatha-carolina.jpg"
import benz from "assets/img/team/benz.jpg"
import handi from "assets/img/team/handi.jpg"
import jejouw from "assets/img/team/jejouw.jpg"
import joel from "assets/img/team/joel.jpg"
import kevinCahya from "assets/img/team/kevin-cahya.jpg"
import kevinSusanto from "assets/img/team/kevin-susanto.jpg"
import maik from "assets/img/team/maik.jpg"
import nick from "assets/img/team/nick.jpg"
import hans from "assets/img/team/hans.jpg"
import luke from "assets/img/team/luke.jpg"
import andrew from "assets/img/team/andrew.jpg"
import shiella from "assets/img/team/shiella.jpg"
import brandon from "assets/img/team/brandon.jpg"

import { Element } from "react-scroll"

import { parseRandom } from "../../utils/helpers"

const HomeTeam = () => {
  const [trigger, anim] = useScrollAnim()

  //State
  // const [randomState, setRandomState] = React.useState(null)

  const team = [
    {
      img: joel,
      title: "Joel Handojo",
      text: "Artist",
      social: [{ type: "instagram", url: "https://instagram.com/jhandojo" }],
    },

    {
      img: jejouw,
      title: "Jejouw",
      text: "Conceptor",
      social: [
        { type: "twitter", url: "https://twitter.com/jejouw" },
        { type: "instagram", url: "https://instagram.com/jejouw" },
      ],
    },
    {
      img: agathaCarolina,
      title: "Agatha Carolina",
      text: "Story Teller",
      social: [
        { type: "twitter", url: "https://twitter.com/agatha_carolina" },
        { type: "instagram", url: "https://instagram.com/agathacarolina" },
      ],
    },
    {
      img: nick,
      title: "Nick Yudha",
      text: "Digital Technologist",
      social: [
        { type: "twitter", url: "https://twitter.com/nickyudha" },
        { type: "instagram", url: "https://instagram.com/nickyudha" },
      ],
    },
    {
      img: maik,
      titleMobile: "Michael Chrsynt",
      title: "Michael Chrisyanto",
      text: "Story Teller",
      social: [{ type: "instagram", url: "https://instagram.com/mchlchrsynt" }],
    },
    {
      img: kevinCahya,
      title: "Kevin Cahya",
      text: "Project Manager",
      social: [
        { type: "twitter", url: "https://twitter.com/skevinc" },
        { type: "instagram", url: "https://instagram.com/skevinc" },
      ],
    },
    {
      img: hans,
      title: "Hans Yonathan",
      text: "Co-Project Manager",
      social: [
        { type: "twitter", url: "https://twitter.com/blade_heaven" },
        { type: "instagram", url: "https://instagram.com/hansyona" },
      ],
    },
    {
      img: kevinSusanto,
      title: "Kevin Susanto",
      text: "Strategic Advisor",
      social: [
        { type: "twitter", url: "https://twitter.com/kevinsusanto" },
        { type: "instagram", url: "https://instagram.com/kevinsusanto" },
      ],
    },
    {
      img: benz,
      title: "Benz Budiman",
      text: "Strategic Advisor",
      social: [
        { type: "twitter", url: "https://twitter.com/bzjb" },
        { type: "instagram", url: "https://instagram.com/benzbudiman" },
      ],
    },
    {
      img: handi,
      title: "Handi Jaya",
      text: "Advisor",
      social: [{ type: "instagram", url: "https://instagram.com/handi_hj" }],
    },
    {
      img: shiella,
      title: "Shiella Witanto",
      text: "Artist",
      social: [{ type: "instagram", url: "https://instagram.com/shiella.w" }],
    },
    {
      img: luke,
      title: "Luke Devern",
      textMobile: "Blockchain Advisor.",
      text: "Blockchain Advisor",
      social: [
        { type: "instagram", url: "https://www.instagram.com/lukedevern/" },
      ],
    },
    {
      img: andrew,
      title: "Andrew Lau",
      textMobile: "Blockchain Advisor.",
      text: "Blockchain Advisor",
      social: [
        { type: "instagram", url: "https://www.instagram.com/andrewlau__/" },
      ],
    },
    {
      img: brandon,
      title: "Brandon Salim",
      text: "Strategic Advisor",
      social: [
        { type: "twitter", url: "https://twitter.com/brandonicholas" },
        { type: "instagram", url: "https://instagram.com/brandonsalim" },
      ],
    },
  ]

  const [randomState, setRandomState] = React.useState(parseRandom(team))

  return (
    <Element name="team-content">
      <div className="sc-home-team pt-main pb-main" id="team" ref={trigger}>
        <div className="container">
          <div className={`heading ${anim(1)}`}>
            <h2>The Team</h2>
          </div>

          <div className="d-block d-lg-none">
            <Slider
              arrowsInitial={false}
              arrowsXxlDown={false}
              arrowsXlDown={false}
              arrowsLgDown={false}
              arrowsMdDown={false}
              arrowsSmDown={false}
              showInitial={5}
              showXxlDown={5}
              showXlDown={4}
              showLgDown={3}
              showMdDown={3}
              showSmDown={2.15}
              scrollInitial={3}
              scrollXxlDown={3}
              scrollXlDown={3}
              scrollLgDown={2}
              scrollMdDown={2}
              scrollSmDown={2}
              rowsInitial={2}
              rowsXxlDown={2}
              rowsXlDown={2}
              rowsLgDown={2}
              rowsMdDown={2}
              rowsSmDown={2}
              className="slider-team"
            >
              {team.map((item, i) => (
                <div className={`team-item`} key={i}>
                  <div className={`img-wrapper ${anim(1, "fadeIn")}`}>
                    <Image
                      ratio="r-1-1"
                      src={item.img}
                      className={`w-100 ${anim(2 + i, "revealInUp")}`}
                      alt={item.title}
                    />
                  </div>
                  <p className={anim(3 + i)}>
                    {item.titleMobile || item.title}
                  </p>
                  <small className={anim(4 + i)}>
                    {item.textMobile || item.text}
                  </small>
                  <Social
                    size="sm"
                    shape="square"
                    variant="outline-white"
                    size="sm"
                    className={anim(4 + i)}
                    data={item.social}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* {team.map((item, i) => {
                return (
                  <div className={`team-item`} key={i}>
                    <div className={`img-wrapper ${anim(1, "fadeIn")}`}>
                      <Image
                        ratio="r-1-1"
                        src={team[randomState[i]].img}
                        className={`w-100 ${anim(2 + i, "revealInUp")}`}
                        alt={team[randomState[i]].title}
                      />
                    </div>
                    <p className={anim(3 + i)}>
                      {team[randomState[i]].titleMobile ||
                        team[randomState[i]].title}
                    </p>
                    <small className={anim(4 + i)}>
                      {team[randomState[i]].text}
                    </small>
                    {/* <p className={anim(3 + i)}>
                      {item.titleMobile || item.title}
                    </p>
                    <small className={anim(4 + i)}>{item.text}</small> 
                    <Social
                      size="sm"
                      shape="square"
                      variant="outline-white"
                      size="sm"
                      className={anim(4 + i)}
                      data={team[randomState[i]].social}
                    />
                  </div>
                )
              })} */}

          <div className="d-none d-lg-block">
            <div className="row">
              {team.map((item, i) => (
                <div className="col col-lg-3">
                  <div className={`team-item ${anim(2 + i)}`} key={i}>
                    <div className="img-wrapper">
                      <Image
                        ratio="r-1-1"
                        src={item.img}
                        className={`w-100 ${anim(2 + i, "revealInUp")}`}
                        alt={item.title}
                      />
                    </div>
                    <p className={anim(3 + i)}>{item.title}</p>
                    <small className={anim(4 + i)}>{item.text}</small>
                    <Social
                      size="sm"
                      shape="square"
                      variant="outline-white"
                      size="sm"
                      className={anim(4 + i)}
                      data={item.social}
                    />
                  </div>
                </div>
              ))}

              {/* {randomState && (
                <>
                  {randomState.map((item, i) => (
                    <div className="col col-lg-3">
                      <div className={`team-item ${anim(2 + i)}`} key={i}>
                        <div className="img-wrapper">
                          <Image
                            ratio="r-1-1"
                            src={team[item].img}
                            className={`w-100 ${anim(2 + i, "revealInUp")}`}
                            alt={team[item].title}
                          />
                        </div>
                        <p className={anim(3 + i)}>{team[item].title}</p>
                        <small className={anim(4 + i)}>{team[item].text}</small>
                        <Social
                          size="sm"
                          shape="square"
                          variant="outline-white"
                          size="sm"
                          className={anim(4 + i)}
                          data={team[randomState[i]].social}
                        />
                      </div>
                    </div>
                  ))}
                </>
              )} */}

              {/* {team.map((item, i) => {
                return (
                  <div className="col col-lg-3">
                    <div className={`team-item ${anim(2 + i)}`} key={i}>
                      <div className="img-wrapper">
                        <Image
                          ratio="r-1-1"
                          src={item.img}
                          className={`w-100 ${anim(2 + i, "revealInUp")}`}
                          alt={item.title}
                        />
                      </div>
                      <p className={anim(3 + i)}>{item.title}</p>
                      <small className={anim(4 + i)}>{item.text}</small>
                      <Social
                        size="sm"
                        shape="square"
                        variant="outline-white"
                        size="sm"
                        className={anim(4 + i)}
                        data={item.social}
                      />
                    </div>
                  </div>
                )
              })} */}
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default HomeTeam
