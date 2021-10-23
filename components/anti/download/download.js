// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Download
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

import { CoverContent } from "components/anti"

import buttonAppStore from "./assets/button_appstore.png"
import buttonPlayStore from "./assets/button_playstore.png"
import placeholder from "./assets/placeholder_r4-5.jpg"

export const Download = ({
  background,
  className,
  title,
  titleClassName,
  text,
  textClassName,
  buttons,
  buttonsClassName,
  image,
  imageAlt,
  theme,
}) => {
  const downloadTheme = () => {
    if (theme === "dark") {
      return "dark"
    } else {
      return "light"
    }
  }

  return (
    <CoverContent
      theme={downloadTheme()}
      img={background}
      contentMaxWidth="mw-100"
      className={`download ${className}`}
    >
      <div className="row">
        <div className="col-text col-md-6 col-lg-7">
          {title && <h2 className={`${titleClassName}`}>{title}</h2>}
          {text && <p className={textClassName}>{text}</p>}
          <div className={`btn-group ${buttonsClassName}`}>
            {buttons.map((button, i) => {
              return (
                <a href={button.url} key={i}>
                  <img
                    src={button.img}
                    className="img-fluid"
                    alt={button.alt || "Download"}
                  />
                </a>
              )
            })}
          </div>
        </div>
        <div className="col-img order-md-first col-md-6 col-lg-5">
          {image && <img src={image} className="img-fluid" alt={imageAlt} />}
        </div>
      </div>
    </CoverContent>
  )
}

Download.propTypes = {
  theme: PropTypes.oneOf(["", "light", "dark"]),
  background: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  text: PropTypes.string,
  textClassName: PropTypes.string,
  buttons: PropTypes.any,
  buttonsClassName: PropTypes.any,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
}

Download.defaultProps = {
  theme: "light",
  className: "",
  title: "Lorem Ipsum Dolor Sit Amet",
  titleClassName: "",
  text:
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  textClassName: "",
  buttons: [
    {
      url: "",
      img: buttonAppStore,
    },
    {
      url: "",
      img: buttonPlayStore,
    },
  ],
  buttonsClassName: "",
  image: placeholder,
  imageAlt: "Download",
}
