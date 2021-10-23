import React, { useState } from "react"

export const AcfLabelWValueList = ({ data }) => {
  const block = data && data.labelWValueList

  return (
    <section
      className={`acf-label-w-value-list py-main
        ${block.bgColor || ""} 
        ${data.attributes.className || ""}
      `}
    >
      <div className="container">
        {block.title && <h2 className="h2">{block.title}</h2>}
        {block.text && <p>{block.text}</p>}
        {block.list && (
          <div className="label-value-list mt-5">
            <div className="row row-3">
              {block.list.map((stat, i) => {
                return (
                  <div
                    className="col col-md-4 label-value-item"
                    key={`${id}${i}`}
                  >
                    <p className="label">{stat.label}</p>
                    <p className="value">{stat.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
