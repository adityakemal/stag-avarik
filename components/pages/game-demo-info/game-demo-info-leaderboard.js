import image from "assets/img/home/img_play-to-earn.png"
import AvarikButton from "components/avarik-saga/avarik-button"
import { useScrollAnim } from "components/hooks/hooks"

const GameDemoInfoLeaderboard = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-game-demo-info-leaderboard" ref={trigger}>
            <div className="py-main h-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-text">
                            <h1 className={anim(1, "fadeInDown")}>Leaderboard & MMR System</h1>
                            <p className={`text-justify w-100 ${anim(2, "fadeInDown")}`}>
                                The top 100 players participating in the Game Demo trial will have their names etched on our wall of fame. Earn your ranks by winning battles and fighting Heroes of similar rank. Rise through the MMR to gain honor and climb up the leaderboard for special rewards such as $VORTEM.
                            </p>
                            {/* <AvarikButton
                                text="See Leaderboard"
                                link="/leaderboard"
                                className={`mb-4 px-5 ${anim(4)}`}
                            /> */}
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

export default GameDemoInfoLeaderboard