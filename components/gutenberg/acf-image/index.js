import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

export const AcfImage = ({ data }) => {
  const block = data && data.image

  return (
    <div className={`mb-3 acf-image ${data.attributes.className || ""}`}>
      <GatsbyImage
        image={block.image.sourceUrlSharp.childImageSharp.fluid}
        alt={
          block.image.altText || block.image.title || block.caption || "Core"
        }
        className="img-fluid w-100 mb-2"
      />
      {/* {block.caption && (
        <small className="text-muted text-center d-block">
          {block.caption}
        </small>
      )} */}
    </div>
  )
}
