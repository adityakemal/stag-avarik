import AvarikTitle from "components/avarik-saga/avarik-title"
import { Modal } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"

import frame from "assets/img/common/frame-rarity.png"
import rarityCommon from "assets/img/common/rarity-common.png"
import rarityUncommon from "assets/img/common/rarity-uncommon.png"
import rarityRare from "assets/img/common/rarity-rare.png"
import rarityLegendary from "assets/img/common/rarity-legendary.png"
import border from "assets/img/common/border-paper.png"
import AvarikButton from "../avarik-button"

const getRarityColor = (rarity) => {
  switch (rarity) {
    case "Common":
      return `color-common`
    case "Uncommon":
      return `color-uncommon`
    case "Rare":
      return `color-rare`
    case "Legendary":
      return `color-legendary`

    default:
      return ``
  }
}

const ModalRarity = ({
  modal,
  setModal,
  selected,
  imgWithFrame = true,
  className,
}) => {
  const [trigger, anim] = useScrollAnim()

  return (
    <Modal
      id="modal-rarity"
      isShowing={modal}
      hide={() => setModal(null)}
      className={`modal-rarity ${className}`}
    >
      <img src={border} className="border-top" alt="" />
      <img src={border} className="border-bottom" alt="" />
      <AvarikTitle
        title={selected?.name}
        logo={selected?.logoDark || selected?.logo}
      />
      <div className="content" ref={trigger}>
        {selected?.rarity?.map((item, i) => (
          <>
            <div className="row w-100 mx-0 my-4" key={i}>
              <div className="col-md-7 col-text">
                <h6
                  className={`title-rarity mb-2 ${getRarityColor(
                    item?.population?.type
                  )} ${anim(i + 1)}`}
                >
                  {item?.population?.type}
                </h6>

                <div className=" row justify-content-between ">
                  <div className="col px-2">
                    <h4 className={`title ${anim(i + 2)}`}>{item.title}</h4>
                  </div>
                  {item.population.number && item.population.percentage ? (
                    <h6 className={`pr-2  population ${anim(i + 5)}`}>
                      {item.population.number} ({item.population.percentage})
                    </h6>
                  ) : null}
                </div>
                <p className={`description ${anim(i + 3)}`}>{item.text}</p>
                <div className={`${anim(i + 4)}`}>
                  <AvarikButton
                    text="Buy now on Opensea"
                    className={`my-4 `}
                    sideLeftClassName="side-left-btn-cover"
                    sideRightClassName="side-right-btn-cover"
                    link={
                      "https://opensea.io/collection/avariksagauniverse?search[stringTraits][0][name]=Class" +
                        `&search[stringTraits][0][values][0]=${selected?.name}` +
                        `&search[stringTraits][1][name]=Subclass&search[stringTraits][1][values][0]=${item?.title}` ||
                      ""
                    }
                    variant="dark"
                  />
                </div>
              </div>
              <div className="col-md-5 col-img">
                <img
                  src={frame}
                  className={`img-fluid img-frame ${
                    imgWithFrame ? "d-block" : "d-none"
                  }`}
                />
                <img
                  src={item.img}
                  className={`img-fluid img-rarity ${anim(
                    i + 5,
                    "revealInUp"
                  )}`}
                />
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
