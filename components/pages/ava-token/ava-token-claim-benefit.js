import imgParticipateGovernanceVote from "assets/img/token/img_participate-governence-vote.png";
import imgPlayingTheGame from "assets/img/token/img_playing-the-game.png";
import imgStaking from "assets/img/token/img_staking-vortem.png";
import { useScrollAnim } from "components/hooks/hooks";
import React from "react";

const data = [
    {
        img: imgStaking,
        text: "Staking rewards when staking the AVRK Token"
    },
    {
        img: imgPlayingTheGame,
        text: "Rewards through playing the game"
    },
    {
        img: imgParticipateGovernanceVote,
        text: "Participate in governance votes to drive the game forward"
    }
]

const AvaTokenClaimBenefit = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="how-to-claim-benefit" ref={trigger}>
            <div className="py-5">
                <div className={`heading ${anim(1)}`}>
                    <h3>How can I claim benefits from AVRK tokens?</h3>
                </div>
                <div className="content">
                    <div className="row m-0">
                        {data.map((item, index) => (
                            <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                                <img src={item.img} className={`img-claim-benefit ${anim(index + 1)}`} />
                                <h6 className={`desc-claim-benefit ${anim(index + 1)}`}>{item.text}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AvaTokenClaimBenefit