// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Social
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

export const Social = ({ data, className, size, shape, variant, stacked }) => {
  const socialType = (item) => {
    if (item === "instagram") {
      return "aib ai-instagram"
    } else if (item === "twitter") {
      return "aib ai-twitter"
    } else if (item === "facebook") {
      return "aib ai-facebook-f"
    } else if (item === "linkedin") {
      return "aib ai-linkedin-in"
    } else if (item === "youtube") {
      return "aib ai-youtube"
    } else if (item === "pinterest") {
      return "aib ai-pinterest-p"
    } else if (item === "whatsapp") {
      return "aib ai-whatsapp"
    } else if (item === "tiktok") {
      return "aib ai-tiktok"
    } else if (item === "discord") {
      return "aib ai-discord"
    } else if (item === "email") {
      return "air ai-envelope"
    } else if (item === "medium") {
      return "aib ai-medium-m"
    } else if (item === "opensea") {
      return "aib ai-opensea"
    } else {
      return ""
    }
  }

  const socialSize = () => {
    return `social-${size}`
  }

  const socialShape = () => {
    return `social-${shape}`
  }

  const socialVariant = () => {
    if (variant === "primary") {
      return "social-primary"
    } else if (variant === "primary-inverse") {
      return "social-primary inverse"
    } else if (variant === "white") {
      return "social-white"
    } else if (variant === "outline-white") {
      return "social-outline-white"
    } else {
      return ""
    }
  }

  return (
    <ul
      className={`social ${
        size && socialSize()
      } ${socialShape()} ${socialVariant()} ${className} ${
        stacked && "stacked"
      }`}
    >
      {data.map((item, i) => {
        return (
          <>
            {(stacked && (
              <li key={i} className="social-item">
                <a href={item.url} target="_blank">
                  <div className={`social-link social-${item.type}`}>
                    <i className={item.icon || socialType(item.type)} />
                  </div>
                  {item.title}
                </a>
              </li>
            )) || (
              <li key={i} className="social-item">
                <a
                  href={item.url}
                  target="_blank"
                  className={`social-link social-${item.type}`}
                >
                  <i className={item.icon || socialType(item.type)} />
                </a>
              </li>
            )}
          </>
        )
      })}
    </ul>
  )
}

Social.propTypes = {
  size: PropTypes.oneOf("sm", "lg", ""),
  shape: PropTypes.oneOf("circle", "square"),
  variant: PropTypes.oneOf(
    "primary",
    "primary-inverse",
    "white",
    "outline-white"
  ),
  data: PropTypes.any,
  className: PropTypes.string,
}

Social.defaultProps = {
  shape: "circle",
  variant: "primary",
  data: [
    { type: "facebook", title: "", url: "#" },
    { type: "twitter", title: "", url: "#" },
    { type: "youtube", title: "", url: "#" },
    { type: "linkedin", title: "", url: "#" },
  ],
  className: "",
}
