import image from "assets/img/home/img_play-to-earn.png"
import { useScrollAnim } from "components/hooks/hooks"

const GameDemoInfoSystem = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-game-demo-info-system" ref={trigger}>
            <div className="overlay"></div>
            <div className="py-main h-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-text">
                            <h1 className={anim(1, "fadeInDown")}>PVP & Combat System</h1>
                            <p className={`text-justify w-100 ${anim(2, "fadeInDown")}`}>
                                In this turn-based RPG game, players can test out one another’s strategic prowess by facing off against Avarik’s renowned warriors. Heroes, be prepared to conceive the best team formation, composition, and battle strategy. Each battle rewards $VORTEM to the winners.
                            </p>
                        </div>
                        <div className="col-md-7 col-image">
                            <img src={image} className={`img-fluid ${anim(3, "revealInDown")}`} alt="play-to-earn" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GameDemoInfoSystem