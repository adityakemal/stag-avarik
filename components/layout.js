import React, { useEffect, useLayoutEffect, useContext } from "react"
// import { navigate } from "gatsby"
import { useRouter } from "next/router"

import { Navbar, Footer, Loader } from "components/anti"
import { LoadingContext } from "context/loading-context"
import { ErrorStateContext } from "context/error-msg-context"

// const navigate = (to) => {
//   const router = useRouter()
//   router.push(to)
// }

const Layout = ({ children }) => {
  // Loader Context
  // allows loader only shown when directly visited via URL
  const { initialLoading } = useContext(LoadingContext)
  const { errorMsg } = useContext(ErrorStateContext);
  const router = useRouter()

  // Mobile viewport height workaround
  // prevent quirky behaviour on mobile when cover is set to 100vh
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
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

  // console.log(initialLoading)

  return (
    <>
      {errorMsg && (
        <>
          <div className="error-msg d-none d-md-block">{errorMsg}</div>
          <div className="container d-block d-md-none">
            <div className="error-msg">{errorMsg}</div>
          </div>
        </>
      )}
      {/* <Loader variant="image" theme="dark" effect="fadeOut" /> */}
      <Navbar />
      <main>
        {/* {!initialLoading ? children : <div className="h-vh-100 w-vw-100" />} */}
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
