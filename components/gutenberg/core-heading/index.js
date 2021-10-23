import React from "react"
import { graphql } from "gatsby"

export const Fragment_CoreHeading = graphql`
  fragment CoreHeading on WordPress_CoreHeadingBlock {
    attributes {
      ... on WordPress_CoreHeadingBlockAttributes {
        align
        className
        content
        level
      }
    }
  }
`

export const CoreHeading = ({ data }) => {
  const align = () => {
    if (data.attributes.align) {
      return `text-${data.attributes.align}`
    } else {
      return ""
    }
  }

  // prettier-ignore
  const heading = level => {
    switch (level) {
      case 1:
        return (
          <h1
            className={`core-heading ${align()} ${data.attributes.className || ""}`}
            dangerouslySetInnerHTML={{ __html: data.attributes.content }}
          />
        )
      case 2:
        return (
          <h2
            className={`core-heading ${align()} ${data.attributes.className || ""} `}
            dangerouslySetInnerHTML={{ __html: data.attributes.content }}
          />
        )
      case 3:
        return (
          <h3
            className={`core-heading ${align()} ${data.attributes.className || ""} `}
            dangerouslySetInnerHTML={{ __html: data.attributes.content }}
          />
        )
      case 4:
        return (
          <h4
            className={`core-heading ${align()} ${data.attributes.className || ""} `}
            dangerouslySetInnerHTML={{ __html: data.attributes.content }}
          />
        )
      case 5:
        return (
          <h5
            className={`core-heading ${align()} ${data.attributes.className || ""} `}
            dangerouslySetInnerHTML={{ __html: data.attributes.content }}
          />
        )
      case 6:
        return (
          <h6
            className={`core-heading ${align()} ${data.attributes.className || ""} `}
            dangerouslySetInnerHTML={{ __html: data.attributes.content }}
          />
        )
      default:
        return <div />
    }
  }

  return heading(data.attributes.level)
}
