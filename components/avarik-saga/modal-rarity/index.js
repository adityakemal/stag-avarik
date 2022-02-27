import AvarikTitle from "components/avarik-saga/avarik-title"
import { Modal } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"

import frame from "assets/img/common/frame-rarity.png"
import rarityCommon from "assets/img/common/rarity-common.png"
import rarityUncommon from "assets/img/common/rarity-uncommon.png"
import rarityRare from "assets/img/common/rarity-rare.png"
import rarityLegendary from "assets/img/common/rarity-legendary.png"
import border from "assets/img/common/border-paper.png"

const ModalRarity = ({ modal, setModal, selected, imgWithFrame = true, className }) => {
    const [trigger, anim] = useScrollAnim()
    const rarityLabel = (rarity) => {
        switch (rarity) {
            case "Common":
                return rarityCommon
            case "Uncommon":
                return rarityUncommon
            case "Rare":
                return rarityRare
            case "Legendary":
                return rarityLegendary
        }
    }

    return (
        <Modal
            id="modal-rarity"
            isShowing={modal}
            hide={() => setModal(null)}
            className={`modal-rarity ${className}`}
        >
            <img src={border} className="border-top" alt="" />
            <img src={border} className="border-bottom" alt="" />
            <AvarikTitle title={selected?.name} logo={selected?.logoDark || selected?.logo} />
            <div className="content" ref={trigger}>
                {selected?.rarity?.map((item, i) => (
                    <>
                        <div className="row w-100 mx-0 my-4" key={i}>
                            <div className="col-md-7 col-text">
                                <h4 className={`title ${anim(i + 2)}`}>{item.title}</h4>
                                <p className={`description ${anim(i + 3)}`}>{item.text}</p>
                                <div className="population-wrapper">
                                    <img
                                        src={rarityLabel(item.population.type)}
                                        className={`img-fluid img-rarity-label ${anim(i + 4, "revealInUp")}`}
                                        alt=""
                                    />
                                    {item.population.number && item.population.percentage ? (
                                        <h6
                                            className={`population ${anim(i + 5)}`}>
                                            {item.population.number} ({item.population.percentage})
                                        </h6>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-md-5 col-img">
                                <img src={frame} className={`img-fluid img-frame ${imgWithFrame ? "d-block" : "d-none"}`} />
                                <img src={item.img} className={`img-fluid img-rarity ${anim(i + 5, "revealInUp")}`} />
                            </div>
                        </div>
                        <hr />
                    </>
                ))}
            </div>
        </Modal>
    )
}

export default ModalRarity