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
                                        In this turn-based RPG game, players can test out one another’s strategic prowess by facing off against Avarik’s renowned warriors. Each season provides various rewards, including Avarik Saga NFTs, Armors, Weapons, and more!
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
                                    <p className={`text-center w-100 ${anim2(3, "fadeInDown")}`}>
                                        In this turn-based RPG game, players can test out one another’s strategic prowess by facing off against Avarik’s renowned warriors. Each season provides various rewards, including Avarik Saga NFTs, Armors, Weapons, and more!                                    </p>
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
                                    <p className={`text-center w-100 ${anim3(2, "fadeInDown")}`}>
                                        In this turn-based RPG game, players can test out one another’s strategic prowess by facing off against Avarik’s renowned warriors. Each season provides various rewards, including Avarik Saga NFTs, Armors, Weapons, and more!
                                    </p>
                                    <AvarikButton
                                        text="See Leaderboard"
                                        link="/leaderboard"
                                        variant="dark"
                                        className={`d-none d-md-flex mb-4 px-5 mx-auto ${anim3(3)}`}
                                    />
                                </div>
                                <div className="col-md-6 col-image">
                                    <img src={image3} className={`img-fluid ${anim3(4, "revealInDown")}`} alt="play-to-earn" />
                                    <AvarikButton
                                        text="See Leaderboard"
                                        link="/leaderboard"
                                        variant="dark"
                                        className={`d-flex d-md-none mb-4 px-5 mx-auto ${anim3(3)}`}
                                    />
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