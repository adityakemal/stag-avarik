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
          {/* <li className="nav-item">
            <Button className="btn btn-primary" link="/">
              Home
            </Button>
          </li> */}
          <li className="nav-item" onClick={() => handleClick("saga-content")}>
            <Link
              className="nav-link"
              activeClassName="active"
              // to="/#story"
            >
              Saga
            </Link>
          </li>
          <li
            className="nav-item"
            onClick={() => handleClick("character-content")}
          >
            <Link
              className="nav-link"
              activeClassName="active"
              // to="/#characters"
            >
              Characters
            </Link>
          </li>
          <li
            className="nav-item"
            onClick={() => handleClick("roadmap-content")}
          >
            <Link
              className="nav-link"
              activeClassName="active"
              // to="/#roadmap"
            >
              Roadmap
            </Link>
          </li>
          <li className="nav-item" onClick={() => handleClick("team-content")}>
            <Link
              className="nav-link"
              activeClassName="active"
              // to="/#team"
            >
              Team
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
        </ul>
      </div>
    </>
  )
}

export default DesktopMenu
