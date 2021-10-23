import React from "react"

import { ScPostList } from "./post-list"
import { ScProjectList } from "./project-list"

export const CoreShortcode = ({ data, pageContext }) => {
  switch (data.attributes.text) {
    case "post-list":
      return <ScPostList pageContext={pageContext} />
    case "project-list":
      return <ScProjectList pageContext={pageContext} />
    default:
      return <div />
  }
}
