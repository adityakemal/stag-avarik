import image from "assets/img/mini-game/characters.png"
import { useScrollAnim } from "components/hooks/hooks"

const MiniGameInfoFormation = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-mini-game-info-formation" ref={trigger}>
            <div className="overlay"></div>
            <div className="py-main h-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-image">
                            <img src={image} className={`img-fluid ${anim(1, "revealInDown")}`} alt="play-to-earn" />
                        </div>
                        <div className="col-md-5 col-text">
                            <h1 className={anim(2, "fadeInDown")}>Character & Team Formation</h1>
                            <p className={`text-justify w-100 ${anim(3, "fadeInDown")}`}>
                                Each player has the opportunity to build their own unique Avariks formation. With individual traits and rarity, each character represents a distinctive set of skill, power, and individuality. Create the team that will lead you to glory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiniGameInfoFormation

