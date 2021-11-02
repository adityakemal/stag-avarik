import imgPurchasing from "assets/img/token/img_purchasing.png";
import imgRecruitment from "assets/img/token/img_recruitment.png";
import imgUpgradingSkill from "assets/img/token/img_upgrading-skill-points.png";
import imgUpgradingWeapon from "assets/img/token/img_upgrading-weapon-armor.png";
import { useScrollAnim } from "components/hooks/hooks";
import React from "react";

const data = [
    {
        img: imgRecruitment,
        text: "Used in recruit new Avariks"
    },
    {
        img: imgUpgradingSkill,
        text: "Upgrading the skill points of an Avarik"
    },
    {
        img: imgUpgradingWeapon,
        text: "Upgrading the weapon and armor stats of an Avarik"
    },
    {
        img: imgPurchasing,
        text: "Purchasing in-game ingredients used in upgrading weapons and armors"
    },
]

const AvaTokenWhere = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="where-ava-token-used" ref={trigger}>
            <div className="pt-5 pb-3">
                <div className={`heading ${anim(1)}`}>
                    <h3>Where is AVA Token used?</h3>
                </div>
                <div className="content">
                    <div className="row m-0">
                        {data.map((item, index) => (
                            <div className="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                                <img src={item.img} className={`img-where-content ${anim(index + 2)}`} />
                                <h6 className={`desc-where-content ${anim(index + 2)}`}>{item.text}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AvaTokenWhere