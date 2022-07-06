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
    <>
      {/* <div className="row"> */}
      <div className="col-sm-6">
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
      <div className="col-sm-6">
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
      {/* </div> */}
      <hr />
    </>
  )
}


const BoxStat = ({ imgSrc, title, value, isPercentage = true, alignStart }) => {
  return (
    <div
      className={`w-100 rows d-inline-flex align-items-center  ${alignStart ? 'justify-content-start' : 'justify-content-center'}`}
      style={{ minWidth: 60 }}
    >
      <div className="sm-col-6 d-inline-flex align-items-center justify-content-end">
        <Image width={36} height={36} src={imgSrc} />
      </div>
      <div
        className="sm-col-6  d-inline-flex flex-column justify-content-center mt-2"
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
        // background: 'salmon',
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        // className="border-gallery"
        style={{
          // backgroundImage: `url(/assets/modal/gallery-modal.svg)`,
          // background: 'skyblue',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100%",
          maxHeight: '90vh',
          maxWidth: 890,
          width: `100%`,
          // padding: `3%`,
          outline: "none",
          border: 0,
          overflow: 'auto'
        }}
      >
        {/* <div className="top-frame">
          <img src="/assets/modal/topFrame.png" alt="" />
        </div> */}
        <div className="container-fluid border-gallery ">
          <img className="rightbot" src="/assets/modal/rightBot.png" alt="" />
          <img className="leftbot" src="/assets/modal/leftBot.png" alt="" />
          <div className="row px-sm-5  px-xs-3 py-sm-5 py-xs-3" style={{ backgroundColor: '#423B38' }}>
            {/* //HEADER  */}
            <div className="col-md-8 text-white">
              <h2 className="title w-100  ">{currentItem.name}</h2>
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
            <div className="col-md-4 pt-xs-3">
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


          {/* //TRAITS  */}
          <div className="row px-sm-5  px-xs-3 pb-5" style={{ backgroundColor: '#D9D4C5' }}>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              <img src={`/assets/modal/traits.svg`} className='img-fluid' style={{ width: "100%" }} />
            </div>
            <Traits {...{ currentItem }} />

            <hr className="my-4 w-100" style={{ borderColor: '#A59480' }} />


            {/* // CHARACTER STAT  */}
            <div className=" col-12 w-100 d-flex justify-content-center align-items-center my-4">
              <img src={`/assets/modal/stats.svg`} className='img-fluid' style={{ width: "100%" }} />
            </div>

            <div className="col-md-12 d-flex justify-content-center mb-4">
              <div className="d-flex justify-content-around w-100 w-md-75  ">
                <BoxStat
                  imgSrc={`/assets/modal/hp.svg`}
                  title="HP"
                  value={currentItem?.battle_stats["HP"]}
                  isPercentage={false}
                />
                <BoxStat
                  imgSrc={`/assets/modal/atk.svg`}
                  title="ATK"
                  value={currentItem?.battle_stats["ATK"]}
                  isPercentage={false}
                />
                <BoxStat
                  imgSrc={`/assets/modal/def.svg`}
                  title="DEF"
                  value={currentItem?.battle_stats["DEF"]}
                  isPercentage={false}
                />
              </div>
            </div>

            <hr className="my-4 w-100" style={{ borderColor: '#A59480' }} />

            <div className="col-md-12 row" >
              <div className="col-6 col-sm-3">
                <BoxStat
                  imgSrc={`/assets/modal/counter.svg`}
                  title="Counter Rate"
                  value={currentItem?.battle_stats["Counter Rate"]}
                  alignStart={true}
                />
                <BoxStat
                  imgSrc={`/assets/modal/evasion.svg`}
                  title="Evasion"
                  value={currentItem?.battle_stats["Evasion"]}
                  alignStart={true}
                />
              </div>
              <div className="col-6 col-sm-3">
                <BoxStat
                  alignStart={true}
                  imgSrc={`/assets/modal/acc.svg`}
                  title="Accuracy"
                  value={currentItem?.battle_stats["Accuracy"]}
                />
                <BoxStat
                  alignStart={true}
                  imgSrc={`/assets/modal/crit-rate.svg`}
                  title="Critical Rate"
                  value={currentItem?.battle_stats["Critical Rate"]}
                />
              </div>
              <div className="col-6 col-sm-3">
                <BoxStat
                  alignStart={true}
                  imgSrc={`/assets/modal/block.svg`}
                  title="Block Rate"
                  value={currentItem?.battle_stats["Block Rate"]}
                />{" "}
                <BoxStat
                  alignStart={true}
                  imgSrc={`/assets/modal/crit-dmg.svg`}
                  title="Critical Damage"
                  value={currentItem?.battle_stats["Critical Damage"]}
                />
              </div>
              <div className="col-6 col-sm-3">
                <BoxStat
                  alignStart={true}
                  imgSrc={`/assets/modal/multi.svg`}
                  title="Multi Hit"
                  value={currentItem?.battle_stats["Multi Hit"]}
                />
                <BoxStat
                  alignStart={true}
                  imgSrc={`/assets/modal/pierce.svg`}
                  title="Pierce Rate"
                  value={currentItem?.battle_stats["Pierce Rate"]}
                />
              </div>
            </div>


            <div className="col-md-12 mt-4 d-flex justify-content-center">
              <AvarikButton
                text="Buy Now on Opensea"
                variant="dark"
                className="btn-opensea d-flex m-0 "
                link={`https://opensea.io/assets/0x127e479ac59a1ea76afdedf830fecc2909aa4cae/${currentItem?.id}`}
              />
            </div>


          </div>

        </div>

      </div>
    </Modal >
  )
}



