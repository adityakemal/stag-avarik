import { useScrollAnim, useWindowSize } from "components/hooks/hooks"
import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikTitle from "components/avarik-saga/avarik-title"

import image1 from "assets/img/mini-game/img-pvp.png"
import image2 from "assets/img/mini-game/img-characters.png"
import image3 from "assets/img/mini-game/img-leaderboard.png"
import { Parallax } from "react-scroll-parallax"

const MiniGameInfoContent = () => {
    const [trigger1, anim1] = useScrollAnim()
    const [trigger2, anim2] = useScrollAnim()
    const [trigger3, anim3] = useScrollAnim()
    const { width } = useWindowSize()
    const isMobile = width < 576
    return (
        <section className="sc-mini-game-info-content">
            <section className="sc-mini-game-info-system" ref={trigger1}>
                <div className="py-main h-100">
                    <div className="container">
                        <Parallax speed={-5}>
                            <div className="row justify-content-between">
                                <div className="col-md-6 col-text">
                                    <AvarikTitle
                                        title="PVP & Combat System"
                                        titleClassName={anim1(1, "fadeInDown")}
                                        className="mx-auto"
                                    />
                                    <p className={`w-100 ${anim1(2, "fadeInDown")}`}>
                                        In this turn-based RPG game, players can test out one another’s strategic prowess by facing off against Avarik’s renowned warriors. Heroes, be prepared to conceive the best team formation, composition, and battle strategy. Each battle rewards $VORTEM to the winners.
                                    </p>
                                </div>
                                <div className="col-md-6 col-image">
                                    <img src={image1} className={`img-fluid ${anim1(3, "revealInDown")}`} alt="play-to-earn" />
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </section>
            <section className="sc-mini-game-info-formation" ref={trigger2}>
                <div className="overlay"></div>
                <div className="py-main h-100">
                    <div className="container">
                        <Parallax speed={isMobile ? -5 : -7.5}>
                            <div className="row justify-content-between">
                                <div className="col-md-6 col-image">
                                    <img src={image2} className={`img-fluid ${anim2(1, "revealInDown")}`} alt="play-to-earn" />
                                </div>
                                <div className="col-md-6 col-text">
                                    <AvarikTitle
                                        title="Character & Team Formation"
                                        titleClassName={`text-center ${anim2(2, "fadeInDown")}`}
                                        className="mx-auto"
                                    />
                                    <p className={`text-justify w-100 ${anim2(3, "fadeInDown")}`}>
                                        Each player has the opportunity to build their own unique Avariks formation. With individual traits and rarity, each character represents a distinctive set of skill, power, and individuality. Create the team that will lead you to glory.
                                    </p>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </section>
            <section className="sc-mini-game-info-leaderboard" ref={trigger3}>
                <div className="py-main h-100">
                    <div className="container">
                        <Parallax speed={isMobile ? -5 : -10}>
                            <div className="row justify-content-between">
                                <div className="col-md-6 col-text">
                                    <AvarikTitle
                                        title="Leaderboard & MMR System"
                                        titleClassName={anim3(1, "fadeInDown")}
                                        className="mx-auto"
                                    />
                                    <p className={`text-justify w-100 ${anim3(2, "fadeInDown")}`}>
                                        The top 100 players participating in the Mini Game trial will have their names etched on our wall of fame. Earn your ranks by winning battles and fighting Heroes of similar rank. Rise through the MMR to gain honor and climb up the leaderboard for special rewards such as $VORTEM.
                                    </p>
                                    <AvarikButton
                                        text="See Leaderboard"
                                        link="/leaderboard"
                                        variant="dark"
                                        className={`mb-4 px-5 mx-auto ${anim3(3)}`}
                                    />
                                </div>
                                <div className="col-md-6 col-image">
                                    <img src={image3} className={`img-fluid ${anim3(4, "revealInDown")}`} alt="play-to-earn" />
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MiniGameInfoContent