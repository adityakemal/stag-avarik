import React from "react"
import { BATTLE_STATS, getPercentageMeta } from "./filter"
import Modal from "@mui/material/Modal"

export default function ModalPic({ open, handleClose, currentItem }) {
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
        style={{
          background: "#eee",
          // height: "50%",
          width: "50%",
          padding: "3%",
        }}
      >
        <div
          className=""
          style={{ display: "inline-flex", justifyContent: "space-between" }}
        >
          <div className="">
            {!!currentItem && (
              <div>
                ID: {currentItem?.id}
                <br />
                Name: {currentItem?.name}
                <br />
                Description: {currentItem?.description}
              </div>
            )}
          </div>
          <img src={currentItem?.image} style={{ width: 100, height: 100 }} />
        </div>

        <hr />
        <div className="row">
          <div className="col">
            {!!currentItem &&
              currentItem?.traits?.map((_item, i) => (
                <div>
                  {_item?.trait_type} : {_item?.value} (
                  {getPercentageMeta(_item?.trait_type, _item?.value)}%)
                </div>
              ))}
          </div>
          <div className="col">
            {!!currentItem &&
              BATTLE_STATS.map((L, iL) => (
                <div>
                  {L}: {currentItem?.battle_stats[L]}
                  {iL > 3 ? "%" : ""}
                </div>
              ))}
          </div>
        </div>

        <br />
        {!!currentItem && (
          //
          <a
            style={{ color: "blue" }}
            href={`https://opensea.io/assets/0x127e479ac59a1ea76afdedf830fecc2909aa4cae/${currentItem?.id}`}
          >
            opensea
          </a>
        )}
      </div>
    </Modal>
  )
}
