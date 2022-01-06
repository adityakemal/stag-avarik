import knight from "assets/img/home/icon_knight.png"
import wizard from "assets/img/home/icon_wizard.png"
import marksman from "assets/img/home/icon_marksmen.png"
import { useScrollAnim } from "components/hooks/hooks"

const HomeBattle = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-home-battle" ref={trigger}>
            <div className="py-main h-100">
                <div className="container">
                    <div className="content">
                        <h1 className={`title ${anim(1)}`}>Battle</h1>
                        <p className={`description mb-5 ${anim(2)}`}>
                            The Avarik Saga battle system is a thrilling adventure that requires strategy and finesse, where players must utilize their heroes’ skills to achieve the best of this riveting world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBattle