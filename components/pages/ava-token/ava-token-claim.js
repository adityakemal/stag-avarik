import imgBuyingAvaToken from "assets/img/token/img_buying-ava-token.png";
import imgPlayingTheGame from "assets/img/token/img_playing-the-game.png";
import imgStaking from "assets/img/token/img_staking.png";
import { useScrollAnim } from "components/hooks/hooks";
import React from "react";

const data = [
    {
        img: imgStaking,
        text: "Staking"
    },
    {
        img: imgPlayingTheGame,
        text: "Playing the Game"
    },
    {
        img: imgBuyingAvaToken,
        text: "Buying AVA Token directly from various exchanges"
    }
]

const AvaTokenClaim = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="how-to-claim" ref={trigger}>
            <div className="py-5">
                <div className={`heading ${anim(1)}`}>
                    <h3>How to claim AVA Tokens?</h3>
                </div>
                <div className="content">
                    <div className="row m-0">
                        {data.map((item, index) => (
                            <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                                <img src={item.img} className={`img-claim ${anim(index + 1)}`} />
                                <h6 className={`desc-claim ${anim(index + 1)}`}>{item.text}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AvaTokenClaim