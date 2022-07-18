import React, { useState } from "react"
import { Link } from "components/anti/link/link"
import { Accordion } from "components/anti/accordion/accordion"
import { useRouter } from "next/router"
import { scroller, Element } from "react-scroll"
import iconDropdown from "assets/img/common/icon_dropdown.png"
import AvarikButton from "components/avarik-saga/avarik-button"

const gameInfo = [
  // { name: "Faction", link: "/factions" },
  { name: "Class", link: "/class" },
  { name: "Weapons", link: "/weapons" },
  { name: "Armors", link: "/armors" },
  { name: "Gallery", link: "/gallery" },
  // { name: "Lands", link: "/land" },
]

const miniGame = [
  { name: "About Mini Game", link: "/about-mini-game" },
  { name: "Launch Mini Game", link: "https://minigame.avariksaga.com/" },
  { name: "Leaderboard", link: "/leaderboard" },
]

const aboutUs = [
  { name: "Team", link: "/teams" },
  { name: "Lore", link: "/https://medium.com/@Avariksaga" },
  { name: "Whitepaper", link: "https://avarik-saga.gitbook.io/avarik-saga/WiD4nmRtrLEcYb3LPkRJ/" },
]

const currency = [
  { name: "Game Currency", link: "/vortem" },
  { name: "Hold to Earn", link: "/collect-in-game-currency" },
  { name: "Vesting AVRK", link: "/vesting-avrk" },
  { name: "Staking AVRK", link: "/staking-avrk" },
]

const menu = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "https://medium.com/@Avariksaga" },
  { name: "Game Info", menu: gameInfo },
  { name: "Mini Game", menu: miniGame },
  { name: "About Us", menu: aboutUs },
  { name: "Currency", menu: currency },
]

const MobileMenu = ({ navExpand, variant, handleMenuMobile, onConnect, account }) => {
  const Router = useRouter()

  const [expanded, setExpanded] = useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = (content, url) => {
    if (url) {
      if (url.includes("https")) {
        window.open(url, "_blank")
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
              {menu.map((item, i) => {
                if (item.link) {
                  return (
                    <li className={`nav-item nav-item-anim-${i + 1}`} onClick={() => handleCloseMenu("", item.link)}>
                      <Link className={`nav-link anim-${i + 1}`} activeClassName="active">
                        {item.name}
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li className={`nav-item nav-item-anim-${i + 1}`}>
                      <Accordion
                        className={`anim-${i + 1} w-100 mobile-menu-accordion`}
                        title={item.name}
                        titleClassName="nav-link"
                        expandIcon={<img src={iconDropdown} className="img-fluid icon-dropdown" />}
                        defaultExpanded={false}
                        expandedKey={i}
                        expanded={expanded === i}
                        onChange={handleChange(i)}
                      >
                        <ul className="list-unstyled">
                          {item?.menu?.map((itemMenu, indexMenu) => (
                            <li key={indexMenu} onClick={() => handleCloseMenu("", itemMenu.link)}>
                              <Link>
                                {itemMenu.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
        {!account ? (
          <div className="overflow-hidden btn-wrapper">
            <AvarikButton
              variant="light"
              text="Connect Wallet"
              onClick={() => onConnect()}
              disabled={account}
              className="btn-connect-wallet anim-7"
            />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default MobileMenu
