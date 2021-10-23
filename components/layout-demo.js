import React, { useEffect, useLayoutEffect, useContext } from "react"
import { navigate } from "gatsby"

import { Loader } from "components/anti"
import { LoadingContext } from "src/context/loading-context"

const LayoutDemo = ({ children }) => {
  // Loader Context
  // allows loader only shown when directly visited via URL
  const { initialLoading } = useContext(LoadingContext)

  // Mobile viewport height workaround
  // prevent quirky behaviour on mobile when cover is set to 100vh
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  // Transition link
  // for smooth transition effect
  useLayoutEffect(() => {
    const wrapper = document.querySelector("main")
    wrapper.classList.add("animated", "fadeIn")
  }, [])
  useEffect(() => {
    const wrapper = document.querySelector("main")
    const anchor = document.querySelectorAll("a")
    anchor.forEach(item => {
      const navigation = e => {
        const redirect = item.getAttribute("href")
        const currentLoc = window.location.pathname
        e.preventDefault()
        if (currentLoc !== redirect) {
          wrapper.classList.remove("fadeIn")
          wrapper.classList.add("fadeOut")
          setTimeout(() => {
            navigate(redirect)
          }, 250)
        }
      }
      if (item.getAttribute("href") && !item.getAttribute("target")) {
        item.addEventListener("click", navigation)
      }
    })
    return () => {
      anchor.forEach(item => {
        const navigation = e => {
          const redirect = item.getAttribute("href")
          const currentLoc = window.location.pathname
          e.preventDefault()
          if (currentLoc !== redirect) {
            wrapper.classList.remove("fadeIn")
            wrapper.classList.add("fadeOut")
            setTimeout(() => {
              navigate(redirect)
            }, 250)
          }
        }
        if (item.getAttribute("href") && !item.getAttribute("target")) {
          item.removeEventListener("click", navigation)
        }
      })
    }
  }, [])

  return (
    <>
      <Loader variant="image" theme="light" effect="fadeOut" />
      <main>
        {!initialLoading ? children : <div className="h-vh-100 w-vw-100" />}
      </main>
    </>
  )
}

export default LayoutDemo
