import React from "react"

import { Cover } from "../../anti/cover/cover"

export const AcfCoverMain = ({ data }) => {
  const block = data && data.coverMain
  return (
    <Cover
      variant="basic"
      theme="dark"
      img={block.img && block.img.sourceUrlSharp.childImageSharp.fluid}
      imgHeight="h-500px h-md-600px w-100"
      imgOverlay={block.imgOverlay}
      label={block.label}
      title={block.title}
      text={block.text}
      className={`acf-cover-main cover-full ${data.attributes.className || ""}`}
      buttons={block.buttons}
    />
  )
}
