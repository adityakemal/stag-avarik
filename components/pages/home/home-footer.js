import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { useParallax } from "react-scroll-parallax"
import { useScrollAnim } from "components/hooks/hooks"
import { Social } from "components/anti"

import separator from "assets/img/home/separator-partners.png"
import discord from "assets/img/home/icon_discord.png"
import read from "assets/img/home/icon_read.png"
import community from "assets/img/home/icon_community.png"

const HomeFooter = () => {
    const [trigger, anim] = useScrollAnim()

    const { ref } = useParallax({
        scale: [1, 1.1, 'easeInQuad']
    });
    return (
        <section className="sc-home-footer" ref={trigger}>
            <img ref={ref} src={separator} className="separator img-fluid" alt="" />
            <div className="py-main">
                <div className="container d-flex align-items-center flex-column mx-auto mw-md">
                    <AvarikTitle title="Join the Community" titleClassName={`title ${anim(1, "revealInUp")} mb-4`} />
                    <p className={`description ${anim(2, "revealInUp")} mb-5`}>
                        Become a part of our community for exclusives updates!
                    </p>
                    <div className="row w-100 justify-content-between">
                        <div className={`community-btn discord ${anim(2)}`}>
                            <img src={discord} className="img-fluid" alt="discord" />
                            <p>Get Started (Discord)</p>
                        </div>
                        <div className={`community-btn read ${anim(3)}`}>
                            <img src={read} className="img-fluid" alt="read" />
                            <p>Read up on Factions</p>
                        </div>
                        <div className={`community-btn community ${anim(4)}`}>
                            <img src={community} className="img-fluid" alt="community" />
                            <p>Engage in community quests</p>
                        </div>
                    </div>
                    <div className="row w-100 justify-content-center mt-5">
                        <Social
                            shape="square"
                            variant="outline-primary"
                            data={[
                                { type: "twitter", title: "", url: "https://twitter.com/avariksaga" },
                                { type: "facebook", title: "", url: "https://www.instagram.com/avariksaga" },
                                { type: "discord", title: "", url: "https://t.co/QjHTk9f6NN" },
                                { type: "medium", title: "", url: "https://medium.com/@Avariksaga" },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFooter