import React from "react"

import { Image } from "components/anti/image/image"
import { Slider } from "components/anti/slider/slider"
import { Social } from "components/anti/social/social"
import { useScrollAnim, useWindowSize } from "components/hooks/hooks"
import AvarikTitle from "components/avarik-saga/avarik-title"

import aditiaKiranang from "assets/img/advisor/aditia-kiranang.jpeg"
import brianLu from "assets/img/advisor/brian-lu.jpeg"
import ireneUmar from "assets/img/advisor/irene-umar.jpeg"
import pangXueKai from "assets/img/advisor/pang-xue-kai.jpeg"
import partners from "assets/img/advisor/guilds-and-partners.png"
import investors from "assets/img/advisor/investors.png"
import partnersMobile from "assets/img/advisor/guilds-and-partners-mobile.png"
import investorsMobile from "assets/img/advisor/investors-mobile.png"
import ornament from "assets/img/common/ornament.png"

const HomeAdvisors = () => {
    const [trigger, anim] = useScrollAnim()
    const [trigger2, anim2] = useScrollAnim()
    const { width } = useWindowSize()

    const team = [
        {
            img: brianLu,
            title: "Brian Lu",
            text: "Infinity Ventures",
            social: [],
        },
        {
            img: pangXueKai,
            title: "Pang Xue Kai",
            text: "Tokocrypto",
            social: [],
        },
        {
            img: ireneUmar,
            title: "Irene Umar",
            text: "Yield Guild Games South East Asia",
            social: [],
        },
        {
            img: aditiaKiranang,
            title: "Aditia Kiranang",
            text: "Good Games Guild",
            social: [],
        },
    ]
    const teamMobile = [
        {
            img: brianLu,
            title: "Brian Lu",
            text: "Infinity Ventures",
            social: [],
        },
        {
            img: pangXueKai,
            title: "Pang Xue Kai",
            text: "Tokocrypto",
            social: [],
        },
        {
            img: ireneUmar,
            title: "Irene Umar",
            text: "Yield Guild Games South East Asia",
            social: [],
        },
        {
            img: aditiaKiranang,
            title: "Aditia Kiranang",
            text: "Good Games Guild",
            social: [],
        },
    ]

    const isMobile = width < 576;

    return (
        <section
            className="sc-home-advisors sc-dark py-main"
            id="advisors"
            ref={trigger}
        >
            <div className="container">
                <div className={`heading mb-5 ${anim(1)}`}>
                    <AvarikTitle title="Advisors" titleClassName="h2" className="mx-auto" />
                </div>
                <div className="row mx-auto mw-xl">
                    {team.map((item, i) => (
                        <div className="col-md-3 col-6">
                            <div className={`team-item ${anim(2 + i)}`} key={i}>
                                <div className="img-wrapper">
                                    <Image
                                        ratio="r-1-1"
                                        src={item.img}
                                        className={`w-100 ${anim(2 + i, "revealInUp")}`}
                                        alt={item.title}
                                    />
                                </div>
                                <h6 className={`title ${anim(3 + i)}`}>{item.title}</h6>
                                <p className={`text ${anim(4 + i)}`}>{item.text}</p>
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
                <img src={ornament} className="img-fluid img-ornamen my-4" alt="" />
                <div className="py-main" ref={trigger2}>
                    <div className={`heading mb-5 ${anim2(1)}`}>
                        <AvarikTitle title="Investors" titleClassName="h2" className="mx-auto" />
                    </div>
                    <div className="mx-auto mw-lg">
                        <img src={isMobile ? investorsMobile : investors} className={`img-fluid ${anim2(2)}`} />
                    </div>
                </div>
                <img src={ornament} className="img-fluid img-ornamen mb-4" alt="" />
                <div className="py-main" ref={trigger2}>
                    <div className={`heading mb-5 ${anim2(3)}`}>
                        <AvarikTitle title="Guilds and Partners" titleClassName="h2" className="mx-auto" />
                    </div>
                    <div className="mx-auto mw-lg">
                        <img src={isMobile ? partnersMobile : partners} className={`img-fluid ${anim2(4)}`} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAdvisors