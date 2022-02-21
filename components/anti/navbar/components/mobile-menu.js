import React from "react"
import { Link } from "components/anti/link/link"
import { Accordion } from "components/anti/accordion/accordion"
import { useRouter } from "next/router"
import { scroller, Element } from "react-scroll"
import iconDropdown from "assets/img/common/icon_dropdown.png"

const gameInfo = [
  { name: "Class", link: "/class" },
  // { name: "Faction", link: "/factions" },
  { name: "Weapons", link: "/weapons" },
  { name: "Armors", link: "/armors" },
  { name: "Mini Game Info", link: "/mini-game-info" },
  { name: "Game Currency", link: "/vortem" },
]

const miniGame = [
  { name: "About Mini Game", link: "/mini-game-info" },
  { name: "Launch Mini Game", link: "https://minigame.avariksaga.com/" },
  { name: "Leaderboard", link: "/leaderboard" },
]

const MobileMenu = ({ navExpand, variant, handleMenuMobile }) => {
  const Router = useRouter()

  const handleClick = (content, url) => {
    if (url) {
      if (url.includes("https")) {
        window.open(url)
      } else {
        Router.push(url)
      }
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
              <li className="nav-item">
                <Accordion
                  className="anim-2 w-100 mobile-menu-accordion"
                  title="Game Info"
                  titleClassName="nav-link"
                  expandIcon={<img src={iconDropdown} className="img-fluid icon-dropdown" />}
                  defaultExpanded={false}
                >
                  <ul className="list-unstyled">
                    {gameInfo.map((item, i) => (
                      <li key={i} onClick={() => handleCloseMenu("", item.link)}>
                        <Link>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </li>
              <li
                className="nav-item"
                onClick={() => handleCloseMenu("", "https://avarik-saga.gitbook.io/avarik-saga/WiD4nmRtrLEcYb3LPkRJ/")}
              >
                <Link className="nav-link anim-3" activeClassName="active">
                  Whitepaper
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => handleCloseMenu("", "/collect-in-game-currency")}
              >
                <Link className="nav-link anim-4" activeClassName="active">
                  Hold to Earn
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => handleCloseMenu("", "/teams")}
              >
                <Link className="nav-link anim-5" activeClassName="active">
                  Teams
                </Link>
              </li>
              <li className="nav-item">
                <Accordion
                  className="anim-6 w-100 mobile-menu-accordion"
                  title="Mini Game"
                  titleClassName="nav-link"
                  expandIcon={<img src={iconDropdown} className="img-fluid icon-dropdown" />}
                  defaultExpanded={false}
                >
                  <ul className="list-unstyled">
                    {miniGame.map((item, i) => (
                      <li key={i} onClick={() => handleCloseMenu("", item.link)}>
                        <Link>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
