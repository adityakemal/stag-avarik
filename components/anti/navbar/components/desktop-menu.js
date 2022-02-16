import React from "react"
import { useWeb3React } from "@web3-react/core"
import cogoToast from "cogo-toast"
import { scroller } from "react-scroll"
import { Link } from "components/anti/link/link"
import AvarikButton from "components/avarik-saga/avarik-button"
import { injected, walletconnect } from "components/utils/connecters"

import paper from "assets/img/home/paper-3.png"
import iconDropdown from "assets/img/common/icon_dropdown.png"
import { truncate } from "components/utils/helpers"

const gameInfo = [
  { name: "Class", link: "/class" },
  { name: "Faction", link: "/factions" },
  { name: "Weapons", link: "/weapons" },
  { name: "Armors", link: "/armors" },
  { name: "Game Demo Info", link: "/game-demo-info" },
  { name: "Game Currency", link: "/vortem" },
]

const DesktopMenu = ({ navExpand, handleSearch, disabledSearch }) => {
  const { activate, connector, account } = useWeb3React();
  const handleClick = (content) => {
    scroller.scrollTo(content, {
      duration: 500,
      delay: 0,
      smooth: true,
    })
  }
  const onConnect = async (connector) => {
    try {
      await activate(connector === "walletconnect" ? walletconnect : injected);
    } catch (error) {
      console.log("err", error)
      cogoToast.error(error, { hideAfter: 3, heading: '' })
    }
  };

  return (
    <>
      <div className={`desktop-menu d-none d-${navExpand}-flex`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="nav-link">
              Game Info
              <img src={iconDropdown} alt="" className="img-fluid ic-dropdown" />
            </div>
            <ul className="nav-item-dropdown">
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
          <AvarikButton
            variant="light"
            text={account ? truncate(account, 15) : "Connect Wallet"}
            onClick={() => onConnect()}
            disabled={account}
            sideLeftClassName="side-left-btn-navbar"
            sideRightClassName="side-right-btn-navbar"
          />
          {/* <li className="nav-item">
            <i className="air ai-volume ic-music"></i>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default DesktopMenu
