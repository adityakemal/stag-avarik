import { Parallax } from "react-parallax"
import AvarikTitle from "components/avarik-saga/avarik-title"

import separator from "assets/img/home/separator-advisors.png"
import bg from "assets/img/home/bg_game-features.png"

const HomeGameFeatures = () => {
    return (
        <Parallax
            blur={0}
            bgImage={bg}
            strength={200}
            className="cover"
        >
            <section className="sc-home-game-features">
                <img src={separator} className="separator" alt="" />
                <div className="py-main">
                    <div className="container">
                        <AvarikTitle title="Game Features" className="mx-auto text-white" />
                    </div>
                </div>
            </section>
        </Parallax>
    )
}

export default HomeGameFeatures