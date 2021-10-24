import React from "react"

import { Cover } from "components/anti/cover/cover"
import { Button } from "components/anti/buttons/buttons"

import bgMain from "assets/img/common/bg_main-desktop.jpg"
import bgMainMobile from "assets/img/common/bg_main-mobile.jpg"
import logoMain from "assets/img/common/logo_main-title.png"

const HomeCover = () => {
  return (
    <div className="sc-home-cover cover-full">
      <div className="cover-cta">
        <img src={logoMain} className="cover-logo" alt="Logo" />
        <div className="view-opensea">
          <p className="mb-2">
            View <span className="d-none d-md-inline">official</span>{" "}
            <strong>Avarik Saga Universe</strong> on our
          </p>
          <Button
            variant="outline-white"
            link="https://opensea.io/collection/avariksagauniverse"
          >
            OpenSea
          </Button>
        </div>
      </div>
      <Cover
        img={bgMainMobile}
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
