import React from "react"
import META_FILTER, { BATTLE_STATS, getPercentageMeta } from "./filter-helpers"
import Modal from "@mui/material/Modal"
import Image from "next/image"
import AvarikButton from "components/avarik-saga/avarik-button"
import rarityCommon from "assets/img/common/rarity-common.png"
import rarityUncommon from "assets/img/common/rarity-uncommon.png"
import rarityRare from "assets/img/common/rarity-rare.png"
import rarityLegendary from "assets/img/common/rarity-legendary.png"

const getRarityImage = (Subclass) => {
    switch (Subclass) {
        case "Archer":
            return rarityCommon
        case "Squire":
            return rarityCommon
        case "Mage":
            return rarityCommon

        case "Fletcher":
            return rarityUncommon
        case "Sorcerer":
            return rarityUncommon
        case "Swordman":
            return rarityUncommon

        case "Knight":
            return rarityRare
        case "Marksman":
            return rarityRare
        case "Wizard":
            return rarityRare

        case "Legendary Knight":
            return rarityLegendary
        case "Legendary Marksman":
            return rarityLegendary
        case "Legendary Wizard":
            return rarityLegendary

        default:
            return rarityCommon
    }
}

const RowModal = ({ title, content, icon }) => {
    return (
        <div className="row mb-2 ">
            <div className="col-5 row ">
                {icon && icon} &nbsp; &nbsp; {title}
            </div>
            <div className={`col `}>: {content}</div>
        </div>
    )
}

const Traits = ({ currentItem }) => {
    return (
        <div className="w-100 flex  justify-content-center mt-5 pr-5">
            <div
                className="w-100 relative d-inline-flex justify-content-center align-items-center"
                style={{ width: `100%` }}
            >
                <Image
                    src={`/assets/modal/traits.svg`}
                    width={700}
                    height={20}
                    style={{ width: "100%" }}
                />
            </div>

            <div className="row mx-5">
                <div className="col-6">
                    {currentItem?.traits.slice(0, 5).map((item, i) => (
                        <RowModal
                            key={i}
                            title={<div className="">{item?.trait_type}</div>}
                            content={item?.value}
                            icon={
                                <img
                                    src={
                                        META_FILTER?.find((j) => j?.trait_type === item?.trait_type)
                                            ?.icon
                                    }
                                    style={{ width: 20, height: 20 }}
                                />
                            }
                        />
                    ))}
                </div>
                <div className="col-6">
                    {currentItem?.traits.slice(5, 11).map((item, i) => (
                        <RowModal
                            key={i}
                            title={<div className="">{item?.trait_type}</div>}
                            // {_item?.trait_type} : {_item?.value}
                            content={item?.value}
                            icon={
                                <img
                                    src={
                                        META_FILTER?.find((j) => j?.trait_type === item?.trait_type)
                                            ?.icon
                                    }
                                    style={{ width: 20, height: 20 }}
                                />
                            }
                        />
                    ))}
                </div>
            </div>
            <hr />
        </div>
    )
}
const BattleStats = ({ battle_stats }) => {
    return (
        <div className="w-100 flex  justify-content-center pr-5">
            <div className="w-100 relative d-inline-flex justify-content-center align-items-center">
                <Image src={`/assets/modal/stats.svg`} width={700} height={20} />
            </div>

            <div className="d-inline-flex justify-content-around w-100  ">
                <BoxStat
                    imgSrc={`/assets/modal/hp.svg`}
                    title="HP"
                    value={battle_stats["HP"]}
                    isPercentage={false}
                />
                <BoxStat
                    imgSrc={`/assets/modal/atk.svg`}
                    title="ATK"
                    value={battle_stats["ATK"]}
                    isPercentage={false}
                />
                <BoxStat
                    imgSrc={`/assets/modal/def.svg`}
                    title="DEF"
                    value={battle_stats["DEF"]}
                    isPercentage={false}
                />
            </div>
            <hr />
            <div className="row " style={{ maxWidth: 750 }}>
                <div className="col-3">
                    <BoxStat
                        imgSrc={`/assets/modal/counter.svg`}
                        title="Counter Rate"
                        value={battle_stats["Counter Rate"]}
                    />
                    <BoxStat
                        imgSrc={`/assets/modal/evasion.svg`}
                        title="Evasion"
                        value={battle_stats["Evasion"]}
                    />
                </div>
                <div className="col-3">
                    <BoxStat
                        imgSrc={`/assets/modal/acc.svg`}
                        title="Accuracy"
                        value={battle_stats["Accuracy"]}
                    />
                    <BoxStat
                        imgSrc={`/assets/modal/crit-rate.svg`}
                        title="Critical Rate"
                        value={battle_stats["Critical Rate"]}
                    />
                </div>
                <div className="col-3">
                    <BoxStat
                        imgSrc={`/assets/modal/block.svg`}
                        title="Block Rate"
                        value={battle_stats["Block Rate"]}
                    />{" "}
                    <BoxStat
                        imgSrc={`/assets/modal/crit-dmg.svg`}
                        title="Critical Damage"
                        value={battle_stats["Critical Damage"]}
                    />
                </div>
                <div className="col-3">
                    <BoxStat
                        imgSrc={`/assets/modal/multi.svg`}
                        title="Multi Hit"
                        value={battle_stats["Multi Hit"]}
                    />
                    <BoxStat
                        imgSrc={`/assets/modal/pierce.svg`}
                        title="Pierce Rate"
                        value={battle_stats["Pierce Rate"]}
                    />
                </div>
            </div>
        </div>
    )
}

const BoxStat = ({ imgSrc, title, value, isPercentage = true }) => {
    return (
        <div
            className="w-100 rows d-inline-flex align-items-center justify-content-center"
            style={{ minWidth: 60 }}
        >
            <div className="col-6 d-inline-flex align-items-center justify-content-end">
                <Image width={36} height={36} src={imgSrc} />
            </div>
            <div
                className="col-6  d-inline-flex flex-column justify-content-center mt-2"
                style={{
                    whiteSpace: "nowrap",
                    overflow: "visible",
                }}
            >
                {title}
                <h6>
                    {value} {isPercentage && `%`}
                </h6>
            </div>
        </div>
    )
}
export default function ModalPic({ open, handleClose, currentItem }) {
    if (!currentItem) return null

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                // className="modal-gallery"
                style={{
                    // backgroundImage: `url(/assets/modal/gallery-modal.svg)`,
                    background: 'skyblue',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    maxHeight: 800,
                    maxWidth: 890,
                    width: `100%`,
                    padding: `3%`,
                    outline: "none",
                    border: 0,
                    overflow: 'auto'
                }}
            >
                <div className="row w-100 px-5">
                    <pre>
                        {JSON.stringify(currentItem, null, 2)}
                    </pre>
                    <div
                        className="col-9  text-white h-100 flex flex-column justify-content-between pr-2"
                        style={{ minHeight: 180 }}
                    >
                        <div>
                            <h2 className="title ">{currentItem.name}</h2>
                        </div>
                        <div>
                            <RowModal
                                title={<div className="">ID</div>}
                                content={currentItem?.id}
                            />
                            <RowModal
                                title={<div className="">Description</div>}
                                content={currentItem?.description}
                            />
                            <RowModal
                                title={<div className="">Rarity</div>}
                                content={
                                    <img
                                        src={getRarityImage(currentItem?.battle_stats?.Subclass)}
                                        style={{ width: 100, height: 20, objectFit: "contain" }}
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div className="col-3 border">
                        <div className="relative">
                            <Image layout="fill" src={`/assets/modal/frame-rarity.svg`} />
                        </div>

                        <img
                            src={currentItem?.image}
                            className={`img-fluid img-char`}
                            style={{ width: "100%", height: `100%`, objectFit: "cover" }}
                        />
                    </div>
                </div>

                <Traits {...{ currentItem }} />
                <BattleStats
                    {...{ currentItem, battle_stats: currentItem?.battle_stats }}
                />
                <AvarikButton
                    text="Buy Now on Opensea"
                    variant="dark"
                    className="btn-opensea d-flex d-lg-none"
                    link={`https://opensea.io/assets/0x127e479ac59a1ea76afdedf830fecc2909aa4cae/${currentItem?.id}`}
                />
                {/* <div className="row">
          <div className="col">
            {!!currentItem &&
              BATTLE_STATS.map((L, iL) => (
                <div>
                  {L}: {currentItem?.battle_stats[L]}
                  {iL > 3 ? "%" : ""}
                </div>
              ))}
          </div>
        </div> */}

                {/* {!!currentItem && (
          //
          <a
            style={{ color: "blue" }}
            href={`https://opensea.io/assets/0x127e479ac59a1ea76afdedf830fecc2909aa4cae/${currentItem?.id}`}
          >
            opensea
          </a>
        )} */}
            </div>
        </Modal>
    )
}



