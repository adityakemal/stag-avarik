import AvarikButton from "components/avarik-saga/avarik-button"
import { useScrollAnim } from "components/hooks/hooks"


const LandCover = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-land-cover cover-full" ref={trigger}>
            <div className="py-main h-100">
                <div className="container mw-sm">
                    <h1 className={`text-white ${anim(1)}`}>Avaland Story</h1>
                    <p className={`text-white ${anim(2)}`}>
                        4 clashing factions that wage endless wars in Avaland - an open world owned, operated, and controlled by players.
                        <br /><br />
                        To maintain their teritory in Avaland, it’s up to you to fight against other faction and rebuild the Kingdom.
                    </p>
                    <AvarikButton
                        text="Mint Now"
                        className={`px-5 ${anim(3)}`}
                    />
                </div>
            </div>
        </section>
    )
}

export default LandCover