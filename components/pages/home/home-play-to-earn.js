import image from "assets/img/home/img_play-to-earn.png"
import { useScrollAnim } from "components/hooks/hooks"

const HomePlayToEarn = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-play-to-earn" ref={trigger}>
            <div className="overlay"></div>
            <div className="py-main h-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-image">
                            <img src={image} className={`img-fluid ${anim(1, "revealInDown")}`} alt="play-to-earn" />
                        </div>
                        <div className="col-md-5 col-text">
                            <h1 className={anim(2, "fadeInDown")}>Play to Earn</h1>
                            <p className={anim(3, "fadeInDown")}>
                                Win in-game battles and complete valorous quests to earn <strong> $VORTEM Token</strong>, which can be used to upgrade weapons and armors, recruit new Avariks, and purchase ingredients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePlayToEarn