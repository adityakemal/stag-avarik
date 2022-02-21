import { useScrollAnim } from "components/hooks/hooks"

import joel from "assets/img/team/joel.jpeg"
import kevinCahya from "assets/img/team/kevin-cahya.jpeg"
import kyuwonKim from "assets/img/team/kyuwon-kim.jpeg"
import seanEdbert from "assets/img/team/sean-edbert-sanjoto.jpeg"
import hans from "assets/img/team/hans.jpeg"
import alita from "assets/img/team/alita.jpeg"
import hunter from "assets/img/team/hunter.jpeg"
import eric from "assets/img/team/eric.jpeg"
import jejouw from "assets/img/team/jejouw.jpeg"
import agathaCarolina from "assets/img/team/agatha-carolina.jpeg"
import kevinSusanto from "assets/img/team/kevin-susanto.jpeg"
import nick from "assets/img/team/nick.jpeg"
import benz from "assets/img/team/benz.jpeg"
import maik from "assets/img/team/maik.jpeg"
import handi from "assets/img/team/handi.jpeg"
import brandon from "assets/img/team/brandon.jpeg"

import AvarikTitle from "components/avarik-saga/avarik-title"
import { Image, Slider, Social } from "components/anti"

const TeamsMain = () => {
    const [trigger, anim] = useScrollAnim()

    const team = [
        {
            img: jejouw,
            title: "Jejouw",
            text: "Conceptor",
            social: [],
            // social: [
            //     { type: "twitter", url: "https://twitter.com/jejouw" },
            //     { type: "instagram", url: "https://instagram.com/jejouw" },
            // ],
        },
        {
            img: kevinCahya,
            title: "Kevin Cahya",
            text: "CEO",
            social: [],
            // social: [
            //     { type: "twitter", url: "https://twitter.com/skevinc" },
            //     { type: "instagram", url: "https://instagram.com/skevinc" },
            // ],
        },
        {
            img: kyuwonKim,
            title: "Kyuwon Kim (Sean)",
            text: "CMO",
            social: [],
            // social: []
        },
        {
            img: seanEdbert,
            title: "Sean Edbert Sanjoto",
            text: "CPO",
            social: [],
            // social: []
        },
        {
            img: joel,
            title: "Joel Handojo",
            text: "Art Director",
            social: [],
            // social: [{ type: "instagram", url: "https://instagram.com/jhandojo" }],
        },
        {
            img: hans,
            title: "Hans Yonathan",
            text: "Product Manager",
            social: [],
            // social: [
            //     { type: "twitter", url: "https://twitter.com/blade_heaven" },
            //     { type: "instagram", url: "https://instagram.com/hansyona" },
            // ],
        },
        {
            img: hunter,
            title: "Hunter",
            text: "Blockchain Lead",
            social: [],
            // social: [],
        },
        {
            img: alita,
            title: "Alita Christanto",
            text: "Project Manager",
            social: [],
            // social: [],
        },
        {
            img: eric,
            title: "Eric Edyta",
            text: "Creative Lead",
            social: [],
            // social: [],
        },
        {
            img: nick,
            title: "Nick Yudha",
            text: "Product Advisor",
            social: [],
            // social: [
            //     { type: "twitter", url: "https://twitter.com/nickyudha" },
            //     { type: "instagram", url: "https://instagram.com/nickyudha" },
            // ],
        },
        {
            img: brandon,
            title: "Brandon Salim",
            text: "Advisor",
            social: [],
            // social: [
            //     { type: "twitter", url: "https://twitter.com/brandonicholas" },
            //     { type: "instagram", url: "https://instagram.com/brandonsalim" },
            // ],
        },
        {
            img: kevinSusanto,
            title: "Kevin Susanto",
            text: "Advisor",
            social: [],
            // social: [
            //     { type: "twitter", url: "https://twitter.com/kevinsusanto" },
            //     { type: "instagram", url: "https://instagram.com/kevinsusanto" },
            // ],
        },
        {
            img: agathaCarolina,
            title: "Agatha Carolina",
            text: "Story Teller",
            social: [],
            // social: [
            //     { type: "twitter", url: "https://twitter.com/agatha_carolina" },
            //     { type: "instagram", url: "https://instagram.com/agathacarolina" },
            // ],
        },
        {
            img: maik,
            titleMobile: "Michael Chrsynt",
            title: "Michael Chrisyanto",
            text: "Story Teller",
            social: [],
            // social: [{ type: "instagram", url: "https://instagram.com/mchlchrsynt" }],
        },
        {
            img: benz,
            title: "Benz Budiman",
            text: "Advisor",
            social: [],
            // social: [
            //     { type: "twitter", url: "https://twitter.com/bzjb" },
            //     { type: "instagram", url: "https://instagram.com/benzbudiman" },
            // ],
        },
        {
            img: handi,
            title: "Handi Jaya",
            text: "Advisor",
            social: [],
            // social: [{ type: "instagram", url: "https://instagram.com/handi_hj" }],
        },
    ]

    return (
        <section className="sc-teams-main cover-full" ref={trigger}>
            <div className="py-main">
                <div className="container">
                    <AvarikTitle title="Team" titleClassName="text-white" className="mx-auto mb-5" />
                    {/* <div className="d-block d-lg-none">
                        <Slider
                            arrowsInitial={false}
                            arrowsXxlDown={false}
                            arrowsXlDown={false}
                            arrowsLgDown={false}
                            arrowsMdDown={false}
                            arrowsSmDown={false}
                            showInitial={2}
                            showXxlDown={2}
                            showXlDown={2}
                            showLgDown={2}
                            showMdDown={2}
                            showSmDown={2}
                            scrollInitial={2}
                            scrollXxlDown={2}
                            scrollXlDown={2}
                            scrollLgDown={2}
                            scrollMdDown={2}
                            scrollSmDown={2}
                            rowsInitial={4}
                            rowsXxlDown={4}
                            rowsXlDown={4}
                            rowsLgDown={4}
                            rowsMdDown={4}
                            rowsSmDown={4}
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
                                    <h6 className={anim(3 + i)}>
                                        {item.titleMobile || item.title}
                                    </h6>
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
                    </div> */}
                    {/* <div className="d-none d-lg-block"> */}
                    <div className="row">
                        {team.map((item, i) => (
                            <div className="col-lg-3 col-6">
                                <div className={`team-item ${anim(2 + i)}`} key={i}>
                                    <div className="img-wrapper">
                                        <Image
                                            ratio="r-1-1"
                                            src={item.img}
                                            className={`w-100 ${anim(2 + i, "revealInUp")}`}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h6 className={anim(3 + i)}>{item.title}</h6>
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
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default TeamsMain