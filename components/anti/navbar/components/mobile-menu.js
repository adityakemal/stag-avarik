import React from "react"
import { Link } from "components/anti/link/link"
import { Accordion } from "components/anti/accordion/accordion"

import { scroller, Element } from "react-scroll"

const MobileMenu = ({ navExpand, variant, handleMenuMobile }) => {
  const handleClick = (content) => {
    scroller.scrollTo(content, {
      duration: 500,
      delay: 100,
      smooth: true,
    })
  }

  const handleCloseMenu = (content) => {
    handleMenuMobile(false, () => handleClick(content))
  }
  return (
    <>
      <div className={`mobile-menu d-${navExpand}-none ${variant}`}>
        <div className="mobile-menu-content">
          <div className="container">
            <ul className="navbar-nav">
              <li
                className="nav-item"
                onClick={() => handleCloseMenu("saga-content")}
              >
                <Link
                  className="nav-link anim-2"
                  activeClassName="active"
                // to="/#saga"
                >
                  Saga
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => handleCloseMenu("character-content")}
              >
                <Link
                  className="nav-link anim-3"
                  activeClassName="active"
                // to="/#characters"
                >
                  Characters
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => handleCloseMenu("roadmap-content")}
              >
                <Link
                  className="nav-link anim-4"
                  activeClassName="active"
                // to="/#roadmap"
                >
                  Roadmap
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => handleCloseMenu("team-content")}
              >
                <Link
                  className="nav-link anim-5"
                  activeClassName="active"
                // to="/#team"
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link anim-6"
                  activeClassName="active"
                  to="/litepaper"
                >
                  Lite Paper
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link anim-7"
                  activeClassName="active"
                  to="/weapons"
                >
                  Weapons
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
