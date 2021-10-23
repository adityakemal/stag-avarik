import React from "react"
import { graphql } from "gatsby"

import { AcfImage } from "./../acf-image"
import { CoreList } from "./../core-list"
import { CoreHeading } from "./../core-heading"
import { CoreParagraph } from "./../core-paragraph"

export const Fragment_CoreGroup = graphql`
  fragment CoreGroup on WordPress_CoreGroupBlock {
    attributes {
      ... on WordPress_CoreGroupBlockAttributes {
        align
        anchor
        className
      }
    }
    innerBlocks {
      name
      ...AcfImage
      ...CoreHeading
      ...CoreList
      ...CoreParagraph
    }
  }
`

export const CoreGroup = ({ data }) => {
  const align = () => {
    if (data.attributes.align) {
      return `text-${data.attributes.align}`
    } else {
      return ""
    }
  }
  return (
    <section
      className={`core-group py-main ${align()} ${data.attributes.className ||
        ""}`}
      id={`${data.attributes.anchor || ""}`}
    >
      <div className="container">
        <div className="core-group-body">
          {data.innerBlocks.map((value, i) => {
            switch (value.name) {
              case "acf/image":
                return <AcfImage data={value} key={i} />
              case "core/list":
                return <CoreList data={value} key={i} />
              case "core/heading":
                return <CoreHeading data={value} key={i} />
              case "core/paragraph":
                return <CoreParagraph data={value} key={i} />
              default:
                return <div />
            }
          })}
        </div>
      </div>
    </section>
  )
}
