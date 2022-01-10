import ignis from "assets/img/common/flag_ignis.png"
import tenebris from "assets/img/common/flag_tenebris.png"
import terra from "assets/img/common/flag_terra.png"
import glacia from "assets/img/common/flag_glacia.png"

const FactionsMain = () => {
    return (
        <section className="sc-factions-main cover-full">
            <div className="py-main h-100">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-text">
                            <h5 className="label">Faction</h5>
                            <h1 className="title">Ignis</h1>
                            <p className="description">
                                The feisty Ignis proudly bear their faction’s fire insignia. Much like the scorching desert they call home, they are the life and soul of any party - an Ignis never backs down from a challenge.
                            </p>
                        </div>
                        <div className="col-8 col-img">
                            <img src={ignis} className="flag-factions" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FactionsMain