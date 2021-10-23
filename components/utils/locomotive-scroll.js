import { useEffect } from "react"

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

const scrollTheme = {
  container: "#___gatsby",
  options: {
    smooth: true,
    // smoothMobile: false,
    // getDirection: true,
    // touchMultiplier: 2.5,
    // lerp: 0.15,
  },
}

const Scroll = () => {
  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scrollTheme.container),
      ...scrollTheme.options,
    })
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction)
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [])

  return null
}

export default Scroll
