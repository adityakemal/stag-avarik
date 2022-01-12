import image from "assets/img/home/img_play-to-earn.png"
import { Link } from "components/anti"
import AvarikButton from "components/avarik-saga/avarik-button"
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
                            <p className={`text-justify w-100 ${anim(3, "fadeInDown")}`}>
                                Win in-game battles and complete valorous quests to earn <strong> $VORTEM Token</strong>, which can be used to upgrade weapons and armors, recruit new Avariks, and purchase ingredients.
                            </p>
                            <AvarikButton
                                text="Learn More About Vortem"
                                link="/vortem"
                                className={`mb-4 ${anim(4)}`}
                            />
                            <Link to="/game-demo-info" className={`link-game-demo mx-auto ${anim(5)}`}>
                                See Game Demo Info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePlayToEarn