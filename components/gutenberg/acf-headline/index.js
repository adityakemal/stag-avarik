import React, { useState } from "react"

import { Button, ButtonGroup } from "components/anti/buttons/buttons"

export const AcfHeadline = ({ data }) => {
  const block = data && data.headline
  return (
    <section
      className={`acf-headline py-main
        ${block.bgColor || ""} 
        ${data.attributes.className || ""}
      `}
    >
      <div className="container mw-lg text-md-center">
        {block.title && <h2 className="h2">{block.title}</h2>}
        {block.text && <p>{block.text}</p>}
        {block.buttons && (
          <ButtonGroup btnMargin="mx-0 mx-md-3" stackedSmDown>
            {block.buttons.map((item, i) => {
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
          </ButtonGroup>
        )}
      </div>
    </section>
  )
}
