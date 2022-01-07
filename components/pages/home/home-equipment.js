import knight from "assets/img/home/icon_knight.png"
import wizard from "assets/img/home/icon_wizard.png"
import marksman from "assets/img/home/icon_marksmen.png"
import bgCard from "assets/img/common/bg_card-avarik.png"
import { useScrollAnim } from "components/hooks/hooks"
import AvarikCards from "components/avarik-saga/avarik-cards"

const HomeEquipment = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-home-equipment" ref={trigger}>
            <div className="py-main">
                <div className="container mx-auto mw-lg">
                    <h1 className={`title ${anim(1)}`}>Equipment</h1>
                    <p className={`description mx-auto mb-5 ${anim(2)}`}>
                        Explore the weapons and armors at your Hero’s disposal
                    </p>
                    <div className="row row-content">
                        <div className="col-4 col-item">
                            <AvarikCards
                                image={knight}
                                imgClassName={`icon ${anim(3)}`}
                                label="Weapon"
                            />
                        </div>
                        <div className="col-4 col-item">
                            <AvarikCards
                                image={knight}
                                imgClassName={`icon ${anim(4)}`}
                                label="Armors"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeEquipment