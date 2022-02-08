import AvarikTitle from "components/avarik-saga/avarik-title"
import separator from "assets/img/home/separator-advisors.png"

const HomeGameFeatures = () => {
    return (
        <section className="sc-home-game-features">
            <img src={separator} className="separator" alt="" />
            <div className="py-main">
                <div className="container">
                    <AvarikTitle title="Game Features" className="mx-auto text-white" />
                </div>
            </div>
        </section>
    )
}

export default HomeGameFeatures