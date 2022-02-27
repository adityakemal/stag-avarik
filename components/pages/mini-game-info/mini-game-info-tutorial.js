import AvarikTitle from "components/avarik-saga/avarik-title"
import { useScrollAnim, useWindowSize } from "components/hooks/hooks"

import tutorial1 from "assets/img/mini-game/tutorial-1.png"
import tutorial2 from "assets/img/mini-game/tutorial-2.png"
import tutorial3 from "assets/img/mini-game/tutorial-3.png"
import claim1 from "assets/img/vortem/claim-1.png"
import claim2 from "assets/img/vortem/claim-2.png"
import claim3 from "assets/img/vortem/claim-3.png"
import hr from "assets/img/vortem/horizontal-line.png"
import bg from "assets/img/vortem/bg_claim-full.png"
import bgMobile from "assets/img/vortem/bg_claim-full-mobile.png"
import ornament from "assets/img/common/ornament.png"


const MiniGameInfoTutorial = () => {
    const [trigger, anim] = useScrollAnim()
    const { width } = useWindowSize()
    return (
        <section className="sc-mini-game-info-tutorial" ref={trigger}>
            <img src={width > 992 ? bg : bgMobile} className="bg" alt="" />
            <div className="py-main">
                <div className="container">
                    <AvarikTitle title="Mini Game Tutorial" className="mx-auto" titleClassName={`text-center ${anim(1)}`} />
                    <div className="row mt-5">
                        <div className="col-lg-4 col-item text-center">
                            <img src={tutorial1} className={`img-icon img-fluid ${anim(2)}`} />
                            <div className="claim-card">
                                <img src={claim1} className={`img-fluid claim-number ${anim(5, "revealInUp")}`} />
                                <h5 className={anim(8)}>Login to <br /> Metamask</h5>
                                <img src={hr} className={`img-fluid hr ${anim(11)}`} />
                                <p className={anim(14)}>
                                    Connect to your MetaMask wallet. You need at least *3 Avariks to play.                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-item text-center">
                            <img src={tutorial2} className={`img-icon img-fluid ${anim(3)}`} />
                            <div className="claim-card">
                                <img src={claim2} className={`img-fluid claim-number ${anim(5, "revealInUp")}`} />
                                <h5 className={anim(9)}>Set Your <br /> Formation</h5>
                                <img src={hr} className={`img-fluid hr ${anim(12)}`} />
                                <p className={anim(15)}>
                                    Set up your formation by selecting ‘Teams’ and your chosen Heroes. Each formation consists of 3 characters. Create the dream team and earn Formation Bonus.                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-item text-center">
                            <img src={tutorial3} className={`img-icon img-fluid ${anim(4)}`} />
                            <div className="claim-card">
                                <img src={claim3} className={`img-fluid claim-number ${anim(5, "revealInUp")}`} />
                                <h5 className={anim(10)}>Join the <br /> Battle</h5>
                                <img src={hr} className={`img-fluid hr ${anim(13)}`} />
                                <p className={anim(16)}>
                                    Join the battleground and fight your way to the victor’s throne!                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={ornament} className="img-fluid img-ornamen mb-4" alt="" />
        </section>
    )
}

export default MiniGameInfoTutorial