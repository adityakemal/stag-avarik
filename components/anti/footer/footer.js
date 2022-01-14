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
    // { title: "Game Demo Info", link: "/game-demo-info" },
    { title: "Hold to Earn", link: "/collect-in-game-currency" },
    { title: "In Game Currency", link: "/vortem" },
  ]

  const social = [
    {
      type: "discord",
      title: "Avarik Saga",
      url: "https://discord.gg/AvarikSaga",
    },
    {
      type: "twitter",
      title: "avariksaga",
      url: "https://twitter.com/avariksaga",
    },
    {
      type: "instagram",
      title: "@avariksaga",
      url: "https://instagram.com/avariksaga",
    },
    {
      type: "email",
      title: "info@avariksaga.com",
      url: "mailto:info@avariksaga.com",
    },
    {
      type: "medium",
      title: "Avarik Saga",
      url: "https://medium.com/@Avariksaga",
    },
  ]

  return (
    <>
      <footer>
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
                  <p>
                    Avarik Saga, a metaverse where blockchain-based game
                    converge with art in a creative space community. Uncover
                    endless possibilities as you journey in this war-ridden
                    realm with 8,888 generative personas from over 400+
                    hand-drawn attributes of loyal Knights, crafty Archers, and
                    arcane Wizards in 4 novel factions.
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
                    stacked
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
            <div className="row w-100">
              <div className="col-md-6 col-left">
                © {year} Avarik Saga. Site by{" "}
                <a href="https://www.antikode.com/" target="_blank">
                  Antikode
                </a>
                .
                <div className="d-none d-md-block">
                  <a
                    href="https://etherscan.io/address/0x127e479ac59a1ea76afdedf830fecc2909aa4cae"
                    target="_blank"
                  >
                    https://etherscan.io/address/0x127e479ac59a1ea76afdedf830fecc2909aa4cae
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-right">
                <div
                  className="btn btn-link"
                  onClick={() => setModal("modal-privacy")}
                >
                  Privacy Policy
                </div>
                <span className="divider">|</span>
                <div
                  className="btn btn-link"
                  onClick={() => setModal("modal-terms")}
                >
                  Terms & Conditions
                </div>
              </div>
            </div>
            <div className="d-block d-md-none mt-3">
              <a
                href="https://etherscan.io/address/0x127e479ac59a1ea76afdedf830fecc2909aa4cae"
                target="_blank"
              >
                https://etherscan.io/address/0x127e479ac59a1ea76afdedf830fecc2909aa4cae
              </a>
            </div>
          </div>
        </section>
      </footer>

      <Modal
        id="modal-privacy"
        isShowing={modal}
        className={`modal-rarity modal-lg modal-terms`}
        hide={() => setModal(null)}
      >
        <div className="modal-inner-content">
          <h4 className="h3">Privacy Policy</h4>

          <p>
            At Avarik Saga, accessible from avariksaga.com, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Avarik Saga and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>

          <h5>Consent</h5>

          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>

          <h5>Information we collect</h5>

          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>

          <h5>How we use your information</h5>

          <p>
            We use the information we collect in various ways, including to:
          </p>

          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h5>Third Party Privacy Policies</h5>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>
        </div>
      </Modal>

      <Modal
        id="modal-terms"
        isShowing={modal}
        className={`modal-rarity modal-lg modal-terms`}
        hide={() => setModal(null)}
      >
        <div className="modal-inner-content">
          <h4 className="h3">Terms & Conditions</h4>

          <p>Welcome to Avarik Saga!</p>

          <p>
            These terms and conditions outline the rules and regulations for the
            use of Avarik Saga's Website, located at avariksaga.com.
          </p>

          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Avarik Saga if you do not agree
            to take all of the terms and conditions stated on this page.
          </p>

          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company’s terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves.
          </p>

          <h5>
            <strong>License</strong>
          </h5>

          <p>
            Unless otherwise stated, Avarik Saga and/or its licensors own the
            intellectual property rights for all material on Avarik Saga. All
            intellectual property rights are reserved. You may access this from
            Avarik Saga for your own personal use subjected to restrictions set
            in these terms and conditions.
          </p>

          <h5>
            <strong>Hyperlinking to our Content</strong>
          </h5>

          <p>
            The following organizations may link to our Website without prior
            written approval:
          </p>

          <ul>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </li>
          </ul>

          <p>
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party’s site.
          </p>

          <h5>
            <strong>iFrames</strong>
          </h5>

          <p>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>

          <h5>
            <strong>Content Liability</strong>
          </h5>

          <p>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>

          <h5>
            <strong>Your Privacy</strong>
          </h5>

          <p>Please read Privacy Policy</p>

          <h5>
            <strong>Removal of links from our website</strong>
          </h5>

          <p>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
        </div>
      </Modal>
    </>
  )
}
