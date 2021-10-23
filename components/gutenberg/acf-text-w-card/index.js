import React from "react"

import { Button, ButtonGroup } from "components/anti/buttons/buttons"
import { Card } from "components/anti/card/card"

export const AcfTextWCard = ({ data }) => {
  const block = data && data.textWCard

  return (
    <section
      className={`acf-text-w-card py-main
        ${block.bgColor || ""} 
        ${data.attributes.className || ""}`}
    >
      <div className="container">
        <div className="row row-4">
          <div
            className={`col-md-6 d-flex flex-column justify-content-center mb-sm-down-4 ${block.colOrder}`}
          >
            {block.title && <h2 className="h2">{block.title}</h2>}
            {block.text && <p className="">{block.text}</p>}
            {block.buttons && (
              <ButtonGroup btnMargin="mx-2 mx-md-3">
                {block.buttons.map((item, i) => {
                  return (
                    <Button
                      variant="link"
                      link={item.link && item.link.url}
                      target={item.link && item.link.target}
                      key={`${id}${i}`}
                    >
                      {item.text}
                    </Button>
                  )
                })}
              </ButtonGroup>
            )}
          </div>
          <div className="col-md-6">
            {block.card.img && (
              <Card
                variant="boxless"
                img={block.card.img.sourceUrlSharp.childImageSharp.fluid}
                imgHeight={block.card.cardRatio}
                link={block.card.link && block.card.link.url}
                target={block.card.link && block.card.link.target}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
