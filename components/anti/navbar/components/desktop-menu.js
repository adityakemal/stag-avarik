import React from "react"
import { Link } from "components/anti/link/link"
import { Button } from "components/anti/buttons/buttons"

const DesktopMenu = ({ navExpand, handleSearch, disabledSearch }) => {
  return (
    <>
      <div className={`desktop-menu d-none d-${navExpand}-flex`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassName="active"
              to="/facilities"
            >
              Facilities
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassName="active"
              to="/news-events"
            >
              News & Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/access">
              Access
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              disabledSearch={disabledSearch}
              onClick={handleSearch}
            >
              <i className="air ai-search" />
            </button>
          </li>
          <li className="nav-item">
            <Button className="btn btn-primary">Contact</Button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default DesktopMenu
