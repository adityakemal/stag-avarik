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
  // { name: "Faction", link: "/factions" },
  { name: "Class", link: "/class" },
  { name: "Weapons", link: "/weapons" },
  { name: "Armors", link: "/armors" },
  { name: "Game Currency", link: "/vortem" },
  { name: "Gallery", link: "/gallery" },
  // { name: "Lands", link: "/land" },
]

// const aboutUs = [
// { name: "Team", link: "/teams" },
// { name: "Lore", link: "/https://medium.com/@Avariksaga" },
// { name: "Whitepaper", link: "https://avarik-saga.gitbook.io/avarik-saga/WiD4nmRtrLEcYb3LPkRJ/" },
// ]

const miniGame = [
  { name: "About Mini Game", link: "/about-mini-game" },
  { name: "Launch Mini Game", link: "https://minigame.avariksaga.com/" },
  { name: "Leaderboard", link: "/leaderboard" },
]

const currency = [
  { name: "Hold to Earn", link: "/collect-in-game-currency" },
  { name: "Vesting AVRK", link: "/vesting-avrk" },
  { name: "Staking AVRK", link: "/staking-avrk" },
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

          <li className="nav-item">
            <Link className='nav-link' to={"https://avarik-saga.gitbook.io/avarik-saga/WiD4nmRtrLEcYb3LPkRJ/"}>
              Whitepaper
            </Link>
          </li>

          <li className="nav-item">
            <Link className='nav-link' to={"/collect-in-game-currency"}>
              Hold To Earn
            </Link>
          </li>

          <li className="nav-item">
            <Link className='nav-link' to={"/teams"}>
              Team
            </Link>
          </li>

          <li className="nav-item">
            <Link className='nav-link' to={"https://medium.com/@Avariksaga"}>
              Blog
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
          {/* <li className="nav-item">
            <div className="nav-link about-us">
              About Us
              <img src={iconDropdown} alt="" className="img-fluid ic-dropdown" />
            </div>
            <ul className={`nav-item-dropdown about-us ${account ? "connected" : ""}`}>
              <img src={paper} alt="" className="img-paper img-fluid" />
              {aboutUs.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                  {i !== (aboutUs.length - 1) ? <hr /> : null}
                </li>
              ))}
            </ul>
          </li> */}
          {/* <li className="nav-item">
            <div className="nav-link currency">
              Currency
              <img src={iconDropdown} alt="" className="img-fluid ic-dropdown" />
            </div>
            <ul className={`nav-item-dropdown currency ${account ? "connected" : ""}`}>
              <img src={paper} alt="" className="img-paper img-fluid" />
              {currency.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                  {i !== (currency.length - 1) ? <hr /> : null}
                </li>
              ))}
            </ul>
          </li> */}
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
