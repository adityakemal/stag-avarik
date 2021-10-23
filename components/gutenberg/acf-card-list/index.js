import React, { useState } from "react"

import { Button } from "components/anti/buttons/buttons"
import { Card } from "components/anti/card/card"
import { Slider } from "components/anti/slider/slider"
import { HeadingLink } from "components/anti/type/type"

export const AcfCardList = ({ data }) => {
  const block = data && data.cardList

  return (
    <div>
      <section
        className={`acf-card-list py-main
        ${block.bgColor || ""} 
        ${data.attributes.className || ""}`}
      >
        <div className="container">
          <HeadingLink>
            {block.title && <h2 className="h3">{block.title}</h2>}
            {block.buttons &&
              block.buttons.map((item, i) => {
                return (
                  <Button
                    variant="link"
                    link={item.link && item.link.url}
                    target={item.link && item.link.target}
                    key={i}
                  >
                    {item.text}
                  </Button>
                )
              })}
          </HeadingLink>
          {block.cards && (
            <Slider
              showInitial={3}
              showLgDown={2}
              showMdDown={2}
              showSmDown={1.1}
              visibleInitial={false}
              visibleLgDown={true}
              arrowsLgDown={false}
            >
              {block.cards.map((item, i) => {
                return (
                  item.img && (
                    <Card
                      variant="boxless"
                      img={item.img.sourceUrlSharp.childImageSharp.fluid}
                      title={item.title || "Title"}
                      titleClassName="h6"
                      text={item.text || "Text"}
                      imgHeight={block.cardRatio}
                      link={item.link && item.link.url}
                      key={i}
                    />
                  )
                )
              })}
            </Slider>
          )}
        </div>
      </section>
    </div>
  )
}
