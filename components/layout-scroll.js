import React, { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"

const LayoutScroll = ({ children }) => {
  useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector("#___gatsby"),
      smooth: true,
    })
  }, [])

  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default LayoutScroll
