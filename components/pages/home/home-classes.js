import knight from "assets/img/home/icon_knight.png"
import wizard from "assets/img/home/icon_wizard.png"
import marksman from "assets/img/home/icon_marksmen.png"
import { useScrollAnim } from "components/hooks/hooks"

const HomeClasses = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-home-classes" ref={trigger}>
            <div className="pt-5 pb-main">
                <div className="container mx-auto mw-lg">
                    <h1 className={`title ${anim(1)}`}>Classes</h1>
                    <p className={`description mx-auto mb-5 ${anim(2)}`}>
                        From chivalrous knights to notorious wizards and cunning marksmen, these 3 classes in the Avarik Kingdom have to work hand-in-hand to achieve glory.
                    </p>
                    <div className="row row-content">
                        <div className="col-4 col-item">
                            <img src={knight} className={`img-fluid icon ${anim(3)}`} />
                        </div>
                        <div className="col-4 col-item">
                            <img src={wizard} className={`img-fluid icon ${anim(5)}`} />
                        </div>
                        <div className="col-4 col-item">
                            <img src={marksman} className={`img-fluid icon ${anim(7)}`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeClasses