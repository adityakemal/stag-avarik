import React from "react"
import { Link } from "components/anti/link/link"
import { Button } from "components/anti/buttons/buttons"
import { scroller } from "react-scroll"

const DesktopMenu = ({ navExpand, handleSearch, disabledSearch }) => {
  const handleClick = (content) => {
    scroller.scrollTo(content, {
      duration: 500,
      delay: 0,
      smooth: true,
    })
  }
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
            <Link className="nav-link" activeClassName="active" to="/litepaper">
              Lite Paper
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/weapons">
              Weapons
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/avrk">
              $AVRK
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/token">
              Token
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default DesktopMenu
