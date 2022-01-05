import React from "react"

import { Cover } from "components/anti/cover/cover"
import { Button } from "components/anti/buttons/buttons"

import bgMain from "assets/img/common/bg_main-desktop.jpeg"
import bgMainMobile from "assets/img/common/bg_main-mobile.jpg"
import logoMain from "assets/img/home/logo_main-title.png"

const HomeCover = () => {
  return (
    <div className="sc-home-cover sc-dark cover-full">
      <div className="cover-cta">
        <img src={logoMain} className="cover-logo" alt="Logo" />
        <div className="cta-content">
          <div className="early-access-box">
            Early Access
          </div>
          <Button
            variant="outline-white mx-1"
            className="mb-sm-down-2"
            link="https://opensea.io/collection/avariksagauniverse"
          >
            Demo
          </Button>
          <Button
            variant="outline-white"
            className="mb-sm-down-2 mx-1"
            link="https://opensea.io/collection/avarikweapons"
          >
            Trailer
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
