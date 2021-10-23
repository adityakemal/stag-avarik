import React, { useState } from "react"

import { Feature } from "components/anti/feature/feature"

export const AcfIconWTextList = ({ data }) => {
  const block = data && data.iconWTextList
  return (
    <section
      className={`acf-icon-w-text-list py-main
      ${block.bgColor || ""} 
        ${data.attributes.className || ""}
      `}
    >
      <div className="container">
        {block.title && <h2 className="h2">{block.title}</h2>}
        {block.text && <p>{block.text}</p>}
        {block.list && (
          <div className="row row-3 mt-5">
            {block.list.map((item, i) => {
              return (
                <div className="col-md-4" key={i}>
                  {item.icon && (
                    <Feature
                      img={item.icon.sourceUrl}
                      imgAltText={
                        item.icon.altText || item.icon.title || "Icon"
                      }
                      title={item.title}
                      text={item.text}
                    />
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
