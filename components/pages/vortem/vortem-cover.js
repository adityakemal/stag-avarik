import { Parallax } from "react-parallax"
import { useScrollAnim, useWindowSize } from "components/hooks/hooks"

import logo from "assets/img/vortem/1_logo.png"
import bgCover from "assets/img/vortem/bg_cover.png"
import bgCoverMobile from "assets/img/vortem/bg_cover-mobile.png"
import AvarikTitle from "components/avarik-saga/avarik-title"

const VortemCover = () => {
    const [trigger, anim] = useScrollAnim()
    const { width } = useWindowSize()
    return (
        <section className="sc-vortem-cover cover-full" ref={trigger}>
            {/* <ParallaxScroll y={[10, 0]} className="separator">
                <img className="img-fluid" alt="" src={separator} />
            </ParallaxScroll> */}
            <Parallax
                blur={0}
                bgImage={width > 576 ? bgCover : bgCoverMobile}
                strength={200}
                className="cover"
            >
                <div className="py-main h-100">
                    <div className="container h-100">
                        <div className="row">
                            <div className="col-md-6 col-text">
                                <AvarikTitle
                                    title="$Vortem Token"
                                    titleClassName={`${anim(1)}`}
                                    variant="white"
                                    className="mx-auto"
                                />
                                <p className={`${anim(2)}`}>$VORTEM is the official Avarik Saga in-game currency, which you can use for upgrading weapons & armors, recruit new avariks and purchase ingredients</p>
                            </div>
                            <div className="col-md-6 col-img d-flex justify-content-center">
                                <img src={logo} className={`img-fluid fadeInUp d3 ${anim(3)}`} alt="Vortem" />
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}

export default VortemCover