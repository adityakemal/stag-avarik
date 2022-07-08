import { useScrollAnim } from "components/hooks/hooks"
import avarikIcon from "assets/img/common/logo_main-icon.png"
import avarusLand from "assets/img/land/avarus-land.png"


const LandAvarus = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-land-avarus" ref={trigger}>
            <div className="py-main">
                <div className="container">
                    <h1 className={anim(1)}>Land in Avarus</h1>
                    <div className="row">
                        <div className="col-md-5 pt-4">
                            <div className={`item ${anim(3)}`}>
                                <img src={avarikIcon} className="img-fluid avarik-icon" alt="" />
                                <p className="">
                                    Avarus is a portion in the Avaland metaverse that players can own, customize, and develop to create their own unique in-game experience.
                                </p>
                            </div>
                            <div className={`item ${anim(4)}`}>
                                <img src={avarikIcon} className="img-fluid avarik-icon" alt="" />
                                <p className="">
                                    Avarus is a portion in the Avaland metaverse that players can own, customize, and develop to create their own unique in-game experience.
                                </p>
                            </div>
                            <div className={`item ${anim(5)}`}>
                                <img src={avarikIcon} className="img-fluid avarik-icon" alt="" />
                                <p className="">
                                    Avarus is a portion in the Avaland metaverse that players can own, customize, and develop to create their own unique in-game experience.
                                </p>
                            </div>
                            <div className={`item ${anim(6)}`}>
                                <img src={avarikIcon} className="img-fluid avarik-icon" alt="" />
                                <p className="">
                                    Avarus is a portion in the Avaland metaverse that players can own, customize, and develop to create their own unique in-game experience.
                                </p>
                            </div>
                            <div className={`item ${anim(7)}`}>
                                <img src={avarikIcon} className="img-fluid avarik-icon" alt="" />
                                <p className="">
                                    Avarus is a portion in the Avaland metaverse that players can own, customize, and develop to create their own unique in-game experience.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <img src={avarusLand} className={`img-fluid ${anim(8, "revealInDown")}`} alt="avarus-land" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandAvarus