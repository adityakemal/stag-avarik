import React from "react"

import { Cover } from "components/anti/cover/cover"

import bgMain from "assets/img/common/bg_footer.jpg"
import logoMain from "assets/img/common/logo_main-title.png"

const AVRKCover = () => {
  return (
    <div className="sc-avrk-cover cover-full">
      <Cover
        img={bgMain}
        imgOverlay={40}
        imgHeight="h-250px h-md-350px"
        title="$AVRK Token"
        text="Avarik Saga Governance Token"
        contentMaxWidth="100"
        className="text-center"
      />
    </div>
  )
}

export default AVRKCover
