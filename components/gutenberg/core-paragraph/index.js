import React from "react"
import { graphql } from "gatsby"

export const Fragment_CoreParagraph = graphql`
  fragment CoreParagraph on WordPress_CoreParagraphBlock {
    name
    attributes {
      ... on WordPress_CoreParagraphBlockAttributes {
        align
        content
        className
      }
    }
  }
`

export const CoreParagraph = ({ data }) => {
  const align = () => {
    if (data.attributes.align) {
      return `text-${data.attributes.align}`
    } else {
      return ""
    }
  }
  return (
    <p
      className={`core-paragraph ${align()} ${data.attributes.className || ""}`}
      dangerouslySetInnerHTML={{ __html: data.attributes.content }}
    />
  )
}
