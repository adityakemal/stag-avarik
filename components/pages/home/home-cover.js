import React from "react"

import { Cover } from "components/anti/cover/cover"
import { Button } from "components/anti/buttons/buttons"

import bgMain from "assets/img/common/bg_main-desktop.jpeg"
import bgMainMobile from "assets/img/common/bg_main-mobile.jpg"
import logoMain from "assets/img/home/logo_main-title.png"
import AvarikButton from "components/avarik-saga/avarik-button"

const HomeCover = () => {
  return (
    <div className="sc-home-cover sc-dark cover-full" >

      {/* <div className="cover-cta ">
        <img src={logoMain} className="cover-logo" alt="Logo" />
        <div className="cta-content">
          <div className="row justify-content-center">
            <AvarikButton
              text="Try Mini Game"
              className="mx-5 mb-sm-4"
              sideLeftClassName="side-left-btn-cover"
              sideRightClassName="side-right-btn-cover"
              link="https://minigame.avariksaga.com/"
              variant="dark"
            />
            <AvarikButton
              text={<><i className="aib ai-discord mr-2"></i> Join Our Community</>}
              // text={<><i className="ais ai-play-circle mr-2"></i> Watch Trailer</>}
              className="mx-5 mb-sm-4"
              sideLeftClassName="side-left-btn-cover"
              sideRightClassName="side-right-btn-cover"
              // link="https://www.youtube.com/watch?v=9UNXRh4xrug"
              link="https://discord.com/invite/AvarikSaga"
            />
          </div>
        </div>
      </div> */}

      <div
        className="pt-5 pt-md-0"
        style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', flexDirection: 'column' }}
      >
        <div className="w-100 justify-content-center d-flex px-4 pt-5 pt-md-0" style={{ zIndex: 1000, marginBottom: '6%' }}>
          <img src={logoMain} className="img-fluid avarik-logo" alt="Logo" style={{ maxWidth: '600px', width: '100%' }} />
        </div>

        <div
          className="row row-5 w-100 justify-content-center "
          style={{ zIndex: 1000 }}
        >
          <div className="col-md-5 col-12 d-flex justify-content-center justify-content-md-end mb-4">
            <AvarikButton
              text={<span style={{ whiteSpace: 'nowrap' }}>Try Mini Game</span>}
              className="mx-0 w-100 w-md-auto"
              sideLeftClassName="side-left-btn-cover"
              sideRightClassName="side-right-btn-cover"
              link="https://minigame.avariksaga.com/"
              variant="dark"
            />
          </div>

          <div className="col-md-5 col-12 d-flex justify-content-center justify-content-md-start mb-4">
            <AvarikButton
              text={<><i className="aib ai-discord mr-2"></i> <span style={{ whiteSpace: 'nowrap' }}>Join Our Community</span> </>}
              // text={<><i className="ais ai-play-circle mr-2"></i> Watch Trailer</>}
              className="mx-0 w-100 w-md-auto"
              sideLeftClassName="side-left-btn-cover"
              sideRightClassName="side-right-btn-cover"
              // link="https://www.youtube.com/watch?v=9UNXRh4xrug"
              link="https://discord.com/invite/AvarikSaga"
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
      />
    </div>
  )
}

export default HomeCover
