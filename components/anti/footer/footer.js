// ░█▀▀▀ ░█▀▀█ ░█▀▀▀ ░█▀▀▀ 　 ▀▀█▀▀ ░█▀▀▀█ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█▀▀▀ ░█▄▄▀ ░█▀▀▀ ░█▀▀▀ 　 ─░█── ░█──░█ 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█─── ░█─░█ ░█▄▄▄ ░█▄▄▄ 　 ─░█── ░█▄▄▄█ 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be edited. However, please edit the styling on .footer-custom.scss.

// ========================================================================================================================================
// Footer
// ========================================================================================================================================

import React, { useState } from "react"

import { Link, Social, Modal } from "components/anti"
import { scroller } from "react-scroll"

import logoDark from "assets/img/common/logo_footer.png"
import ornament from "assets/img/common/ornament.png"
import ornamentMobile from "assets/img/common/ornament-mobile.png"
import ornamentFooter from "assets/img/common/ornament-footer.png"
import { useWindowSize } from "components/hooks/hooks"

export const Footer = () => {
  const [modal, setModal] = useState(null)
  const year = new Date().getFullYear()
  // const handleClick = (content) => {
  //   scroller.scrollTo(content, {
  //     duration: 500,
  //     delay: 0,
  //     smooth: true,
  //   })
  // }

  const menuLinks = [
    { title: "Home", link: "/" },
    { title: "Whitepaper", link: "https://avarik-saga.gitbook.io/avarik-saga/WiD4nmRtrLEcYb3LPkRJ/" },
    // { title: "Class", link: "/class" },
    // { title: "Faction", link: "/factions" },
    { title: "Weapons", link: "/weapons" },
    { title: "Armors", link: "/armors" },
    // { title: "Mini Game Info", link: "/about-mini-game" },
    { title: "Hold to Earn", link: "/collect-in-game-currency" },
    { title: "In Game Currency", link: "/vortem" },
  ]

  const social = [
    {
      type: "discord",
      url: "https://discord.gg/AvarikSaga",
    },
    {
      type: "twitter",
      url: "https://twitter.com/avariksaga",
    },
    {
      type: "instagram",
      url: "https://instagram.com/avariksaga",
    },
    {
      type: "email",
      url: "mailto:info@avariksaga.com",
    },
    {
      type: "medium",
      url: "https://medium.com/@Avariksaga",
    },
    {
      type: "youtube",
      url: "https://www.youtube.com/channel/UCc8Rc_5LTEZO2fcem1WEOyw"
    }
  ]

  const { width } = useWindowSize()

  return (
    <>
      <footer>
        <img src={ornamentFooter} className="img-fluid img-ornament-footer" alt="" />
        <section className="footer-main py-main">
          <div className="container">
            <div className="row row-main">
              <div className="col-lg-4 col-footer">
                <div className="footer-about">
                  <img
                    src={logoDark}
                    className="img-fluid footer-logo"
                    alt="Logo"
                  />
                  <p className="text-white">
                    Avarik Saga is a metaverse where blockchain-based RPG converges with art to present an open-world community. Uncover endless possibilities as you journey through this war-ridden realm featuring 8,888 generative personas of over 400+ hand-drawn attributes of loyal Knights, crafty Archers, and arcane Wizards from 4 distinctive factions.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-footer">
                <div className="footer-menu">
                  <h5>Navigate</h5>
                  <div className="navbar-nav">
                    <div className="row">
                      {menuLinks.map((link, i) => {
                        return (
                          <div className="col-6">
                            <div
                              className="nav-item"
                              key={i}
                            // onClick={() => handleClick(link.link)}
                            >
                              <Link className="nav-link" to={link.link}>
                                {link.title}
                              </Link>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-footer">
                <div className="footer-contact">
                  <h5>Social</h5>
                  <Social
                    className="row"
                    size="sm"
                    shape="square"
                    variant="outline-white"
                    data={social}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-bottom">
          <div className="container">
            <img src={width > 576 ? ornament : ornamentMobile} className="img-fluid img-ornamen mb-4" alt="" />
            <div className="row w-100">
              <div className="col-md-6 col-left">
                © {year} Avarik Saga. Site by{" "}
                <a href="https://www.antikode.com/" target="_blank">
                  Antikode
                </a>
                .
              </div>
              {/* <div className="col-md-6 col-right">
                <div className="d-none d-md-block mt-3">
                  <a
                    href="https://etherscan.io/address/0x127e479ac59a1ea76afdedf830fecc2909aa4cae"
                    target="_blank"
                  >
                    https://etherscan.io/address/0x127e479ac59a1ea76afdedf830fecc2909aa4cae
                  </a>
                </div>
              </div> */}
            </div>
            {/* <div className="d-block d-md-none mt-3">
              <a
                href="https://etherscan.io/address/0x127e479ac59a1ea76afdedf830fecc2909aa4cae"
                target="_blank"
              >
                https://etherscan.io/address/0x127e479ac59a1ea76afdedf830fecc2909aa4cae
              </a>
            </div> */}
          </div>
        </section>
      </footer>
    </>
  )
}
