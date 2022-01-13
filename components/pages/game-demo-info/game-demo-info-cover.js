import AvarikButton from "components/avarik-saga/avarik-button"
import { useScrollAnim } from "components/hooks/hooks"

const GameDemoInfoCover = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-game-demo-info-cover cover-full" ref={trigger}>
            <div className="py-main h-100">
                <div className="container">
                    <div className="content">
                        <h1 className={`title ${anim(1)}`}>Game Demo</h1>
                        <p className={`description mb-5 ${anim(2)}`}>
                            Try the exclusive Avarik Saga Game Demo and experience the immersive world of Avarus and its valorous warriors. This demo showcases the best that this fresh, exciting universe has to offer. Train Heroes and unleash your creativity by developing the expansive lands, and lead your faction to victory.                        </p>
                        <AvarikButton
                            text="Try Game Demo"
                            variant="gold"
                            link="https://game-avariksaga-stag.agatedev.net/"
                            target="_blank"
                            className={anim(3)}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GameDemoInfoCover