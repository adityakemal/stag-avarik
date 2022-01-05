import React from "react"
import { Link } from "components/anti/link/link"
import { Button } from "components/anti/buttons/buttons"
import { scroller } from "react-scroll"
import paper from "assets/img/home/paper-3.png"
import iconDropdown from "assets/img/common/icon_dropdown.png"

const gameInfo = [
  { name: "Class", link: "/" },
  { name: "Faction", link: "/" },
  { name: "Weapons", link: "/" },
  { name: "Armors", link: "/" },
  { name: "Game Demo Info", link: "/" },
  { name: "Game Currency", link: "/" },
]

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
            {/* <Link className="nav-link" activeClassName="active" to="/">
              Game Info
            </Link> */}
            <div className="nav-link">
              Game Info
              <img src={iconDropdown} alt="" className="img-fluid ic-dropdown" />
            </div>
            <ul className="nav-item-dropdown">
              <img src={paper} alt="" className="img-paper img-fluid" />
              {gameInfo.map((item, i) => (
                <li key={i}>
                  <Link to="/">
                    {item.name}
                  </Link>
                  {i !== (gameInfo.length - 1) ? <hr /> : null}
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="https://avarik-saga.gitbook.io/avarik-saga/WiD4nmRtrLEcYb3LPkRJ/">
              Whitepaper
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/collect-in-game-currency">
              Hold to Earn
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <i className="air ai-volume ic-music"></i>
          </li>
        </ul>
      </div>
    </>
  )
}

export default DesktopMenu
