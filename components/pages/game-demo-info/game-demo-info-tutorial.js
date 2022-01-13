import { Slider } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"


const GameDemoInfoTutorial = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-game-demo-info-tutorial" ref={trigger}>
            <div className="py-main">
                <div className="container">
                    <div className="heading">
                        <h1 className={`text-white ${anim(1)}`}>Demo Tutorial</h1>
                    </div>
                    {/* <div className="row"> */}
                    <Slider
                        showInitial={3}
                        showXxlDown={3}
                        showXlDown={3}
                        showLgDown={2.2}
                        showMdDown={1.8}
                        showSmDown={1.2}
                        className="slider-tutorial"
                    >
                        <div className={`tutorial-1 ${anim(2, "revealInDown")}`}>
                            <h5 className={anim(3, "revealInDown")}>Login to Metamask</h5>
                            <p className={anim(4, "revealInDown")}>
                                Connect to your MetaMask wallet. You need at least 3 Avarik Heroes to play.
                            </p>
                        </div>
                        <div className={`tutorial-2 ${anim(5, "revealInDown")}`}>
                            <h5 className={anim(2, "revealInDown")}>Set Your Formation</h5>
                            <p className={anim(3, "revealInDown")}>
                                Set up your formation by selecting ‘Teams’ and your chosen Heroes. Each formation consists of 3 characters. Create the dream team and earn Formation Bonus.
                            </p>
                        </div>
                        <div className={`tutorial-3 ${anim(8, "revealInDown")}`}>
                            <h5 className={anim(2, "revealInDown")}>Join the Battle</h5>
                            <p className={anim(3, "revealInDown")}>
                                Join the battleground and fight your way to the victor’s throne!
                            </p>
                        </div>
                    </Slider>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default GameDemoInfoTutorial