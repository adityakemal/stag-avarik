import logoAvaToken from "assets/img/token/logo_ava-token.png";
import logoVortem from "assets/img/token/logo_vortem.png";
import { useScrollAnim } from "components/hooks/hooks";
import React from "react";

const AvaTokenAbout = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="about-ava-token" ref={trigger}>
            <div className="py-5">
                <div className="row m-0 w-100 justify-content-between">
                    <div className="col-md-8 col-sm-12">
                        <h1 className={`title ${anim(2)}`}>$AVA Token</h1>
                        <h5 className={anim(2)}>
                            in-game currency that is required for upgrading weapons and armors, breed, purchasing ingredients, and will be burned after using it.
                        </h5>
                        <h6 className={anim(2)}>
                            Total supply: No Cap
                        </h6>
                    </div>
                    <div className="sc-logo col-md-4 col-sm-12 d-flex justify-content-center">
                        <img src={logoAvaToken} className={`logo-ava-token ${anim(2)}`} />
                        <img src={logoVortem} className={`logo-ava-token ${anim(2)}`} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AvaTokenAbout