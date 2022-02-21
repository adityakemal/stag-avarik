import AvarikButton from "components/avarik-saga/avarik-button"
import { useScrollAnim } from "components/hooks/hooks"
import { Parallax } from "react-parallax"

import bgCover from "assets/img/mini-game/bg_cover.png"
import AvarikTitle from "components/avarik-saga/avarik-title"

const MiniGameInfoCover = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-mini-game-info-cover cover-full" ref={trigger}>
            <Parallax
                blur={0}
                bgImage={bgCover}
                strength={200}
                className="cover"
            >
                <div className="py-main h-100">
                    <div className="container h-100">
                        <div className="content">
                            <AvarikTitle
                                title="Mini Game"
                                titleClassName={`title ${anim(1)}`}
                                className="mx-auto"
                            />
                            <p className={`description ${anim(2)}`}>
                                Try the exclusive Avarik Saga Mini Game and experience the immersive world of Avarus and its valorous warriors. This demo showcases the best that this fresh, exciting universe has to offer. Train Heroes and unleash your creativity by developing the expansive lands, and lead your faction to victory.                        </p>
                            <AvarikButton
                                text="Go to Mini Game"
                                variant="dark"
                                link="https://minigame.avariksaga.com/"
                                target="_blank"
                                className={anim(3)}
                            />
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}

export default MiniGameInfoCover