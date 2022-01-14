import React from "react"

import { Cover } from "components/anti/cover/cover"
import { Button } from "components/anti/buttons/buttons"

import bgMain from "assets/img/common/bg_main-desktop.jpeg"
import bgMainMobile from "assets/img/common/bg_main-mobile.jpg"
import logoMain from "assets/img/home/logo_main-title.png"
import AvarikButton from "components/avarik-saga/avarik-button"

const HomeCover = () => {
  return (
    <div className="sc-home-cover sc-dark cover-full">
      <div className="cover-cta">
        <img src={logoMain} className="cover-logo" alt="Logo" />
        <div className="cta-content">
          <div className="early-access-box">
            Coming Soon
          </div>
          <div className="row justify-content-center">
            {/* <AvarikButton
              text="Demo"
              className="mx-5 mb-sm-4"
              sideLeftClassName="side-left-btn-cover"
              sideRightClassName="side-right-btn-cover"
            /> */}
            <AvarikButton
              text="Trailer"
              className="mx-5 mb-sm-4"
              sideLeftClassName="side-left-btn-cover"
              sideRightClassName="side-right-btn-cover"
            />
          </div>
        </div>
      </div>
      <Cover
        img={bgMain}
        imgMd={bgMain}
        imgOverlay={20}
        imgHeight="h-vh-100"
        title=""
        text=""
        scrollHint
        scrollHintText="Scroll to Explore"
        scrollHintLink="saga-content"
      />
    </div>
  )
}

export default HomeCover
