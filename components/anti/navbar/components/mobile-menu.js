import React from "react"
import { Link } from "components/anti/link/link"
import { Accordion } from "components/anti/accordion/accordion"
import { useRouter } from "next/router"
import { scroller, Element } from "react-scroll"

const MobileMenu = ({ navExpand, variant, handleMenuMobile }) => {
  const Router = useRouter()

  const handleClick = (content, url) => {
    if (url) {
      Router.push(url)
    } else {
      scroller.scrollTo(content, {
        duration: 500,
        delay: 100,
        smooth: true,
      })
    }
  }

  const handleCloseMenu = (content, url) => {
    handleMenuMobile(false, () => handleClick(content, url))
  }
  return (
    <>
      <div className={`mobile-menu d-${navExpand}-none ${variant}`}>
        <div className="mobile-menu-content">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={() => handleCloseMenu("", "/")}>
                <Link className="nav-link anim-1" activeClassName="active">
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => handleCloseMenu("", "/litepaper")}
              >
                <Link className="nav-link anim-2" activeClassName="active">
                  Lite Paper
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => handleCloseMenu("", "/weapons")}
              >
                <Link
                  className="nav-link anim-3"
                  activeClassName="active"
                  // to="/weapons"
                >
                  Weapons
                </Link>
              </li>
              {/* <li className="nav-item"
                onClick={() => handleCloseMenu("", "/ava-token")}
              >
                <Link
                  className="nav-link anim-7"
                  activeClassName="active"
                  to="/token"
                >
                  Token
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
