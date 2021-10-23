import React, { useState } from "react"

import { Button } from "components/anti/buttons/buttons"
import { CoverContent } from "components/anti/cover/cover"

export const AcfCoverContent = ({ data }) => {
  const block = data && data.coverContent

  return (
    <CoverContent
      theme="dark"
      img={block.img && block.img.sourceUrlSharp.childImageSharp.fluid}
      imgOverlay={block.imgOverlay}
      className={`acf-cover-content ${data.attributes.className || ""}`}
    >
      {block.title && <h2 className="h2">{block.title}</h2>}
      {block.text && <p>{block.text}</p>}
      {block.buttons && (
        <div className="btn-group d-block">
          {block.buttons.map((button, i) => {
            return (
              <Button
                variant="link"
                target={button.link.target}
                link={button.link.url}
                key={i}
              >
                {button.text}
              </Button>
            )
          })}
        </div>
      )}
    </CoverContent>
  )
}
