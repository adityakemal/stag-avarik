import React, { useState } from "react"

import { Card } from "components/anti/card/card"
import { Slider } from "components/anti/slider/slider"

export const AcfGallery = ({ data }) => {
  const block = data && data.gallery

  // const block = data.find(x => x.name === "acf/gallery")
  // const gallery = block ? block.gallery.gallery : false
  return (
    <section
      className={`acf-gallery py-main
        ${block.bgColor || ""} 
        ${data.attributes.className || ""}`}
    >
      <div className="container">
        {block.gallery && (
          <Slider
            // fade
            noGutter
            showInitial={1}
            showLgDown={1}
            showMdDown={1}
            showSmDown={1}
            visibleInitial={false}
            visibleLgDown={false}
          >
            {block.gallery.map((item, i) => {
              return (
                <Card
                  variant="boxless"
                  img={item.sourceUrlSharp.childImageSharp.fluid}
                  imgHeight="h-ratio-2-1"
                  key={i}
                />
              )
            })}
          </Slider>
        )}
      </div>
    </section>
  )
}
