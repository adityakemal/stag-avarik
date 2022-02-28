import React from "react"
import { useWeb3React } from "@web3-react/core"
import cogoToast from "cogo-toast"
import { scroller } from "react-scroll"
import { Link } from "components/anti/link/link"
import AvarikButton from "components/avarik-saga/avarik-button"
import { injected, walletconnect } from "components/utils/connecters"

import paper from "assets/img/common/paper-3.png"
import iconDropdown from "assets/img/common/icon_dropdown.png"
import { truncate } from "components/utils/helpers"

const gameInfo = [
  { name: "Class", link: "/class" },
  // { name: "Faction", link: "/factions" },
  { name: "Weapons", link: "/weapons" },
  { name: "Armors", link: "/armors" },
  { name: "Game Currency", link: "/vortem" },
]

const miniGame = [
  { name: "About Mini Game", link: "/about-mini-game" },
  { name: "Launch Mini Game", link: "https://minigame.avariksaga.com/" },
  { name: "Leaderboard", link: "/leaderboard" },
]

const DesktopMenu = ({ navExpand, handleSearch, disabledSearch, onConnect, account }) => {
  return (
    <>
      <div className={`desktop-menu d-none d-${navExpand}-flex`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="nav-link game-info">
              Game Info
              <img src={iconDropdown} alt="" className="img-fluid ic-dropdown" />
            </div>
            <ul className="nav-item-dropdown game-info">
              <img src={paper} alt="" className="img-paper img-fluid" />
              {gameInfo.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                  {i !== (gameInfo.length - 1) ? <hr /> : null}
                </li>
              ))}
            </ul>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/land">
              Land
            </Link>
          </li> */}
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
            <Link className="nav-link" activeClassName="active" to="/teams">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-link mini-game">
              Mini Game
              <img src={iconDropdown} alt="" className="img-fluid ic-dropdown" />
            </div>
            <ul className={`nav-item-dropdown mini-game ${account ? "connected" : ""}`}>
              <img src={paper} alt="" className="img-paper img-fluid" />
              {miniGame.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                  {i !== (miniGame.length - 1) ? <hr /> : null}
                </li>
              ))}
            </ul>
          </li>
          {account ? (
            <div className="wallet-address-box">
              <div className="border"></div>
              {truncate(account, 15)}
            </div>
          ) : (
            <AvarikButton
              variant="light"
              text="Connect Wallet"
              onClick={() => onConnect()}
              disabled={account}
              sideLeftClassName="side-left-btn-navbar"
              sideRightClassName="side-right-btn-navbar"
            />
          )}
          {/* <li className="nav-item">
            <i className="air ai-volume ic-music"></i>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default DesktopMenu
