import React from "react"
import { Link } from "components/anti/link/link"
import { Accordion } from "components/anti/accordion/accordion"

const MobileMenu = ({ navExpand, variant }) => {
  return (
    <>
      <div className={`mobile-menu d-${navExpand}-none ${variant}`}>
        <div className="mobile-menu-content">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link anim-1"
                  activeClassName="active"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link anim-2"
                  activeClassName="active"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Accordion
                  className="anim-3 w-100"
                  title="Facilities"
                  titleClassName="nav-link"
                >
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/facilities">Item</Link>
                    </li>
                    <li>
                      <Link to="/facilities">Item</Link>
                    </li>
                    <li>
                      <Link to="/facilities">Item</Link>
                    </li>
                  </ul>
                </Accordion>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link anim-4"
                  activeClassName="active"
                  to="/news-events"
                >
                  News & Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link anim-5"
                  activeClassName="active"
                  to="/access"
                >
                  Access
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link anim-6"
                  activeClassName="active"
                  to="/services"
                >
                  Services
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
