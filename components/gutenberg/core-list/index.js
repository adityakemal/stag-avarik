import React from "react"
import { graphql } from "gatsby"

export const Fragment_CoreList = graphql`
  fragment CoreList on WordPress_CoreListBlock {
    attributes {
      values
      ordered
      className
    }
  }
`

export const CoreList = ({ data }) => {
  if (data.attributes.ordered) {
    return (
      <ol
        className={`${data.attributes.className || ""}`}
        dangerouslySetInnerHTML={{ __html: data.attributes.values }}
      />
    )
  }
  return (
    <ul
      className={`${data.attributes.className || ""}`}
      dangerouslySetInnerHTML={{ __html: data.attributes.values }}
    />
  )
}
