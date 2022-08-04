import React, { useEffect, useLayoutEffect, useContext } from "react"
import { useRouter } from "next/router"

import { Navbar, Footer } from "components/anti"
import { LoadingContext } from "context/loading-context"
import { ErrorStateContext } from "context/error-msg-context"

const Layout = ({ children, hasFooter = true, mainClass }) => {
  // Loader Context
  // allows loader only shown when directly visited via URL
  const { initialLoading } = useContext(LoadingContext)
  const { errorMsg, setErrorMsg } = useContext(ErrorStateContext)
  const router = useRouter()

  // Mobile viewport height workaround
  // prevent quirky behaviour on mobile when cover is set to 100vh
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("", `${vh}px`)
  }, [])

  //!EDIT
  const navigate = (to) => {
    router.push(to)
  }

  // Transition link
  // for smooth transition effect
  useLayoutEffect(() => {
    const wrapper = document.querySelector("main")
    wrapper.classList.add("animated", "fadeIn")
  }, [])
  useEffect(() => {
    const wrapper = document.querySelector("main")
    const anchor = document.querySelectorAll("a")
    anchor.forEach((item) => {
      const navigation = (e) => {
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
      anchor.forEach((item) => {
        const navigation = (e) => {
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
      {errorMsg && (
        <>
          <div className="error-msg d-none d-md-block slideInRight">
            {errorMsg}
            <i className="air ai-times" onClick={() => setErrorMsg(null)}></i>
          </div>
          <div className="container d-block d-md-none">
            <div className="error-msg slideInDown">
              {errorMsg}
              <i className="air ai-times" onClick={() => setErrorMsg(null)}></i>
            </div>
          </div>
        </>
      )}
      <Navbar />
      <main className={mainClass || ""}>
        {children}
        {hasFooter && <Footer />}
      </main>
    </>
  )
}

export default Layout
