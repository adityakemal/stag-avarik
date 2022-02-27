import AvarikTitle from "components/avarik-saga/avarik-title"
import { useScrollAnim, useWindowSize } from "components/hooks/hooks"

import claimHolding from "assets/img/vortem/3b_claim_holding.png"
import claimPlay from "assets/img/vortem/3c_claim_play.png"
import claimExchange from "assets/img/vortem/3d_claim_exchange.png"
import claim1 from "assets/img/vortem/claim-1.png"
import claim2 from "assets/img/vortem/claim-2.png"
import claim3 from "assets/img/vortem/claim-3.png"
import hr from "assets/img/vortem/horizontal-line.png"
import bg from "assets/img/vortem/bg_claim-full.png"
import bgMobile from "assets/img/vortem/bg_claim-full-mobile.png"
import ornament from "assets/img/common/ornament.png"


const VortemClaim = () => {
    const [trigger, anim] = useScrollAnim()
    const { width } = useWindowSize()
    return (
        <section className="sc-vortem-claim" ref={trigger}>
            <img src={width > 576 ? bg : bgMobile} className="bg" alt="" />
            <div className="py-main">
                <div className="container">
                    <AvarikTitle title="How to Claim" className="mx-auto" titleClassName={anim(1)} />
                    <div className="row mt-5">
                        <div className="col-lg-4 col-item text-center">
                            <img src={claimHolding} className={`img-icon img-fluid ${anim(2)}`} />
                            <div className="claim-card">
                                <img src={claim1} className={`img-fluid claim-number ${anim(5, "revealInUp")}`} />
                                <h5 className={anim(8)}>Staking <br /> Rewards</h5>
                                <img src={hr} className={`img-fluid hr ${anim(11)}`} />
                                <p className={anim(14)}>
                                    You can earn $VORTEM by holding an Avarik NFT, also known as staking.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-item text-center">
                            <img src={claimPlay} className={`img-icon img-fluid ${anim(3)}`} />
                            <div className="claim-card">
                                <img src={claim2} className={`img-fluid claim-number ${anim(5, "revealInUp")}`} />
                                <h5 className={anim(9)}>Play <br /> the Game</h5>
                                <img src={hr} className={`img-fluid hr ${anim(12)}`} />
                                <p className={anim(15)}>
                                    Win $VORTEM in the game by engaging in PvE and PvP battles, Faction Wars, Dungeon Raids, and Tournaments.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-item text-center">
                            <img src={claimExchange} className={`img-icon img-fluid ${anim(4)}`} />
                            <div className="claim-card">
                                <img src={claim3} className={`img-fluid claim-number ${anim(5, "revealInUp")}`} />
                                <h5 className={anim(10)}>Buy & Sell on <br /> Exchange</h5>
                                <img src={hr} className={`img-fluid hr ${anim(13)}`} />
                                <p className={anim(16)}>
                                    More details coming soon!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={ornament} className="img-fluid img-ornamen mb-4" alt="" />
        </section>
    )
}

export default VortemClaim