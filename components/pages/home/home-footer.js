import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { useScrollAnim } from "components/hooks/hooks"

const HomeFooter = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-home-footer" ref={trigger}>
            <div className="py-main">
                <div className="container d-flex align-items-center flex-column mx-auto mw-md">
                    <AvarikTitle title="Join the Community" titleClassName={`title ${anim(1, "revealInUp")} mb-4`} />
                    <p className={`description ${anim(2, "revealInUp")} mb-5`}>
                        Become a part of our community for exclusives updates!
                    </p>
                    <div className="row w-100 justify-content-between">
                        <AvarikButton
                            link="https://opensea.io/collection/avariksagauniverse"
                            target="_blank"
                            text="Get Started"
                            className={`ml-md-0 ${anim(3)}`}
                        />
                        <AvarikButton
                            link="/factions"
                            target="_blank"
                            text="Factions"
                        />
                        <AvarikButton
                            link="/class"
                            target="_blank"
                            text="Characters"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFooter