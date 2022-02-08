import { Parallax } from "react-parallax"
import { Parallax as ParallaxScroll } from "react-scroll-parallax"
import { useScrollAnim } from "components/hooks/hooks"

import logo from "assets/img/vortem/1_logo.png"
import bgCover from "assets/img/vortem/bg_cover.png"
import separator from "assets/img/home/separator-advisors.png"

const VortemCover = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-vortem-cover cover-full" ref={trigger}>
            <ParallaxScroll y={[10, 0]} className="separator">
                <img className="img-fluid" alt="" src={separator} />
            </ParallaxScroll>
            <Parallax
                blur={0}
                bgImage={bgCover}
                strength={200}
                className="cover"
            >
                <div className="py-main h-100">
                    <div className="container h-100">
                        <div className="col-6 logo-text">
                            <h1 className={`fadeInUp d2 ${anim(1)}`}>$Vortem Token</h1>
                            <p className={`fadeInUp d1 ${anim(2)}`}>$VORTEM is the official Avarik Saga in-game currency, which you can use for upgrading weapons & armors, recruit new avariks and purchase ingredients</p>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <img src={logo} className={`img-fluid fadeInUp d3 ${anim(3)}`} alt="Vortem" />
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}

export default VortemCover