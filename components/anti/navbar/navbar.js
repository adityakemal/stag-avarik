// ░█▀▀▀ ░█▀▀█ ░█▀▀▀ ░█▀▀▀ 　 ▀▀█▀▀ ░█▀▀▀█ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█▀▀▀ ░█▄▄▀ ░█▀▀▀ ░█▀▀▀ 　 ─░█── ░█──░█ 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█─── ░█─░█ ░█▄▄▄ ░█▄▄▄ 　 ─░█── ░█▄▄▄█ 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be edited. However, please edit the styling on .navbar-custom.scss.

// ========================================================================================================================================
// Navbar
// ========================================================================================================================================

import React, { useState, useEffect } from "react"
import { Link } from "components/anti"
import useEagerConnect from "components/hooks/useEagerConnect"
import useInactiveListener from "components/hooks/useInactiveListener"
import { useWeb3React } from "@web3-react/core"

import DesktopMenu from "./components/desktop-menu"
import MobileMenu from "./components/mobile-menu"
import SearchMenu from "./components/search-menu"

import logoDark from "assets/img/common/logo-navbar.png"
import logoMobile from "assets/img/common/logo_main-icon-rounded.png"
import { truncate } from "components/utils/helpers"
import cogoToast from "cogo-toast"
import { ModalConnect } from "components/pages/collect-in-game-currency/modal/connect"
import { injected, walletconnect } from "components/utils/connecters"


export const Navbar = () => {
  // Navbar expand config
  // Change the const below & config on variables/navbar.scss when setting the .navbar-expand-*
  // e.g. sm, md, lg, xl, xxl
  const navExpand = "lg"

  // Default theme
  // Options: "navbar-dark", "navbar-light"
  const navTheme = "navbar-dark"

  // Default position
  // Options: "fixed-top", "absolute-top", ""
  const navPosition = "fixed-top"

  // IF NO NAVBAR EXPAND USED (no responsive navbar), do the following:
  // 1. In variables/navbar.scss, set $navbar-top-height-mobile & $navbar-top-height-desktop to 0
  // 2. In variables/navbar.scss, set $navbar-main-height-mobile & $nabvar-main-height-desktop to the same height
  // 3. In variables/navbar.scss, set $navbar-expand-up to ""
  // 4. In navbar.js, edit const navbarExpand to ""

  // SCROLL
  // On scroll state
  const [navScroll, setNavScroll] = useState(false)

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

  useIsomorphicLayoutEffect(() => {
    if (window.pageYOffset > 5) {
      setNavScroll(true)
    }
  }, [])

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 5) {
        setNavScroll(true)
      } else {
        setNavScroll(false)
      }
    }
  }, [])

  // MENU - MOBILE
  // Open / close menu state & handler
  const [mobileMenu, setMobileMenu] = useState({
    initial: false,
    clicked: null,
  })
  // Toggler disabled state & handler
  const [disabledMenu, setDisabledMenu] = useState(false)
  const disableMenu = () => {
    setDisabledMenu(!disabledMenu)
    setTimeout(() => {
      setDisabledMenu(false)
    }, 1500) // set this with your mobile menu animation duration
  }
  const handleMenuMobile = (e, fn) => {
    disableMenu()
    if (mobileMenu.initial === false) {
      setMobileMenu({ initial: null, clicked: true })
    } else if (mobileMenu.clicked === true) {
      setMobileMenu({ clicked: !mobileMenu.clicked })
    } else if (mobileMenu.clicked === false) {
      setMobileMenu({ clicked: !mobileMenu.clicked })
    }
    if (fn) {
      setTimeout(() => {
        fn()
      }, 1500)
    }
  }

  useEffect(() => {
    const navToggler = document.querySelector(".nav-toggler")
    const navMobileMenu = document.querySelector(".mobile-menu")
    const menuBg = document.querySelector(".menu-bg")
    const html = document.querySelector("html")
    const body = document.querySelector("body")
    // prettier-ignore
    if (mobileMenu.clicked === false) {
      // Toggle inactive
      navToggler.classList.add("inactive")
      navMobileMenu.classList.remove("show")
      navMobileMenu.classList.add("hide")
      menuBg.classList.remove("show")
      menuBg.classList.add("hide")
      body.classList.remove("no-scroll")
      html.classList.remove("no-scroll")
    } else if (mobileMenu.clicked === true || (mobileMenu.clicked === true && mobileMenu.initial === null)) {
      // Toggle active
      navToggler.classList.remove("inactive")
      navMobileMenu.classList.add("show")
      menuBg.classList.add("show")
      body.classList.add("no-scroll")
      html.classList.add("no-scroll")
    }
  }, [mobileMenu])

  // SEARCH
  // Open / close menu state & handler
  const [search, setSearch] = useState({
    initial: false,
    clicked: null,
  })
  // Toggler disabled state & handler
  const [disabledSearch, setDisabledSearch] = useState(false)
  const disableSearch = () => {
    setDisabledSearch(!disabledSearch)
    setTimeout(() => {
      setDisabledSearch(false)
    }, 1500) // set this with your mobile menu animation duration
  }
  const handleSearch = () => {
    disableSearch()
    if (search.initial === false) {
      setSearch({ initial: null, clicked: true })
    } else if (search.clicked === true) {
      setSearch({ clicked: !search.clicked })
    } else if (search.clicked === false) {
      setSearch({ clicked: !search.clicked })
    }
  }
  useEffect(() => {
    const searchMenu = document.querySelector(".search-menu")
    const navbarMain = document.querySelector(".navbar-main")
    // prettier-ignore
    if (search.clicked === false) {
      // Toggle inactive
      searchMenu.classList.remove("show")
      searchMenu.classList.add("hide")
      navbarMain.classList.remove("search-show")
      navbarMain.classList.add("search-hide")
    } else if (search.clicked === true || (search.clicked === true && search.initial === null)) {
      // Toggle active
      searchMenu.classList.add("show")
      navbarMain.classList.add("search-show")
    }
  }, [search])

  // connect wallet
  const { activate, connector, account } = useWeb3React();
  const [modal, setModal] = useState(null)
  const [loading, setLoading] = useState(false)

  const onConnect = async (connector) => {
    setLoading(connector)
    try {
      await activate(connector === "walletconnect" ? walletconnect : injected);
      setLoading(false)
      setModal(null)
    } catch (error) {
      cogoToast.error(error, { hideAfter: 3, heading: '' })
      setModal(null)
      setLoading(false)
    }
  };

  const triedEagerConnect = useEagerConnect();
  const [activatingConnector, setActivatingConnector] = useState();
  useInactiveListener(!triedEagerConnect || !!activatingConnector);
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  return (
    <>
      {/* When giving .navbar-expand-*, don't forget to modify the variables on _navbar.scss */}
      <nav
        className={`
          navbar ${navTheme} navbar-expand-${navExpand} ${navPosition}
          ${navScroll ? "is-scrolled" : ""}
        `}
      >
        <ModalConnect modal={modal} setModal={setModal} loading={loading} onConnect={onConnect} />
        <div className="navbar-main">
          <div className="container">
            <ul className="col-left">
              <li className="nav-item-brand">
                <Link className="navbar-brand absolute" to="/">
                  {/* <img src={logoLight} className={`d-none d-${navExpand}-block logo-light img-fluid`} alt="Logo" /> */}
                  <img src={logoMobile} className={`d-block logo-mobile logo-dark img-fluid mr-2`} alt="Logo" />
                  <img src={logoDark} className={`d-none d-${navExpand}-block logo-dark img-fluid`} alt="Logo" />
                </Link>
              </li>
            </ul>
            {account ? (
              <div className={`wallet-address-box d-block d-${navExpand}-none`}>
                <div className="border"></div>
                {truncate(account, 15)}
              </div>
            ) : null}
            {/* Mobile */}
            <ul className={`col-right d-${navExpand}-none`}>
              <li className="nav-item">
                <button
                  className="nav-icon nav-toggler inactive absolute"
                  disabled={disabledMenu}
                  onClick={handleMenuMobile}
                >
                  <span className="icon-bar top-bar" />
                  <span className="icon-bar middle-bar" />{" "}
                  <span className="icon-bar bottom-bar" />
                </button>
              </li>
            </ul>

            {/* Desktop */}
            <DesktopMenu
              disabledSearch={disabledSearch}
              handleSearch={handleSearch}
              navExpand={navExpand}
              account={account}
              onConnect={() => setModal("modalConnect")}
            />
          </div>
          <SearchMenu handleSearch={handleSearch} variant="expand" />
        </div>

        <MobileMenu
          handleMenuMobile={handleMenuMobile}
          mobileMenu={mobileMenu}
          navExpand={navExpand}
          variant="slide-down"
          account={account}
          onConnect={() => setModal("modalConnect")}
        />
        <div className="menu-bg" />
      </nav>
    </>
  )
}
