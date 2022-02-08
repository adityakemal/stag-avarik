import { Parallax } from "react-parallax"
import AvarikButton from "components/avarik-saga/avarik-button"
import { useScrollAnim } from "components/hooks/hooks"

import stakingImage from "assets/img/vortem/5b_staking_image.png"
import bg from "assets/img/vortem/bg_hold-to-earn.png"

const VortemHoldToEarn = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-vortem-hold-to-earn" ref={trigger}>
            <Parallax
                blur={0}
                bgImage={bg}
                strength={200}
                className="bg"
            >
                <div className="py-main h-100">
                    <div className="container h-100">
                        <h1 className={`mb-4 ${anim(2)} d-block d-md-none text-center text-white`}>
                            Hold to Earn Mechanic
                        </h1>
                        <div className="row h-100 justify-content-center">
                            <div className="col-md-6 col-xl-5 col-text">
                                <h1 className={`${anim(2)} d-none d-md-block text-white`}>Hold to Earn Mechanic</h1>
                                <p className={`${anim(3)} text-white`}>
                                    For each Avarik Saga NFT that you hold will earn approximately 3 $VORTEM per day. You can claim your $VORTEM tokens once the game is officially launched.
                                </p>
                                <AvarikButton text="Learn More" className="px-5" link="/collect-in-game-currency" />
                            </div>
                            <div className="col-md-6 col-xl-7 mb-4 col-img">
                                <img
                                    src={stakingImage}
                                    className={`img-fluid ${anim(4)}`}
                                    alt="Vortem"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}

export default VortemHoldToEarn