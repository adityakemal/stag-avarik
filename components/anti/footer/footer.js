// ░█▀▀▀ ░█▀▀█ ░█▀▀▀ ░█▀▀▀ 　 ▀▀█▀▀ ░█▀▀▀█ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█▀▀▀ ░█▄▄▀ ░█▀▀▀ ░█▀▀▀ 　 ─░█── ░█──░█ 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█─── ░█─░█ ░█▄▄▄ ░█▄▄▄ 　 ─░█── ░█▄▄▄█ 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be edited. However, please edit the styling on .footer-custom.scss.

// ========================================================================================================================================
// Footer
// ========================================================================================================================================

import React from "react"

import { Link, Social } from "components/anti"

import logoDark from "assets/img/common/logo_main-dark.png"

export const Footer = () => {
  const menuLinks = [
    { title: "About Us", link: "/about" },
    { title: "Awards", link: "/awards" },
    { title: "Projects", link: "/projects" },
    { title: "Career", link: "/career" },
    { title: "Team", link: "/team" },
    { title: "News", link: "/news" },
  ]

  const contactLinks = [
    { title: "+62 811 170 165", link: "phone:+62811170165" },
    { title: "info@antikode.com", link: "mailto:info@antikode.com" },
  ]

  return (
    <footer>
      <section className="footer-main py-main">
        <div className="container">
          <div className="row row-4">
            <div className="col-lg-4 col-footer">
              <div className="footer-about">
                <img
                  src={logoDark}
                  className="img-fluid footer-logo"
                  alt="Logo"
                />
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate voluptas voluptatum ipsam, natus labore explicabo.
                  Minus praesentium dicta fugit itaque. "
                </p>
                <Social />
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
                          <div className="nav-item" key={i}>
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
                <h5>Contact</h5>
                <p>"Jl. Jurang Mangu Barat no. 8 Tangerang Selatan, Banten"</p>
                {contactLinks.map((link, i) => {
                  return (
                    <div className="d-block">
                      <Link key={i} to={link.link}>
                        {link.title}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <section className="footer-bottom">
        <div className="container">
          <div className="row w-100">
            <div className="col-md-6 col-left">
              © 2021 Antikode. Site by{" "}
              <a href="https://www.antikode.com/" target="_blank">
                Antikode
              </a>
              .
            </div>
            <div className="col-md-6 col-right">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="divider">|</span>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
