import AvarikButton from "components/avarik-saga/avarik-button"
import { useScrollAnim } from "components/hooks/hooks"


const HomeFooter = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-home-footer" ref={trigger}>
            <div className="py-main">
                <div className="container d-flex align-items-center flex-column mx-auto mw-md">
                    <h1 className={`title ${anim(1, "revealInUp")} mb-4`}>
                        Step Forth and Craft Your Own Adventure
                    </h1>
                    <p className={`description ${anim(2, "revealInUp")} mb-5`}>
                        View the official <strong>Avarik Saga Universe </strong> on <strong> OpenSea </strong>
                    </p>
                    <div className="row w-100 justify-content-center">
                        <AvarikButton
                            link="https://opensea.io/collection/avariksagauniverse"
                            target="_blank"
                            text="Main collection"
                            className={`ml-md-0 ${anim(3)}`}
                        />
                        {/* <AvarikButton
                            link="https://game-avariksaga-stag.agatedev.net/"
                            target="_blank"
                            text="Try Game Demo"
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFooter