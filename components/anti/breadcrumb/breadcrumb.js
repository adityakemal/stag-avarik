// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Breadcrumb
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

import { Link } from "components/anti"

export const Breadcrumb = ({ id, path, theme, className }) => {
  const pathNames = typeof path === "string" && path.split("/")

  const breadcrumbTheme = () => {
    return `breadcrumb-${theme}`
  }

  return (
    <ol
      id={id}
      className={`breadcrumb ${breadcrumbTheme()} ${className}`}
      data-testid="breadcrumb"
    >
      {/* <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">Cover</li> */}
      {typeof path === "string" &&
        pathNames.map((item, index) => {
          if (index === 0) {
            return (
              <li className="breadcrumb-item" key={`path-home`}>
                <Link to="/">Home</Link>
              </li>
            )
          } else if (index === pathNames.length - 1 && item !== "") {
            return (
              <li
                className="breadcrumb-item"
                key={`path-${item.split("-").join(" ")}`}
              >
                {item.split("-").join(" ")}
              </li>
            )
          } else if (item === "") {
            return null
          } else {
            let url = pathNames.slice(0, index + 1).join("/")
            return (
              <li
                className="breadcrumb-item"
                key={`path-${item.split("-").join(" ")}`}
              >
                <Link to={url}>{item.split("-").join(" ")}</Link>
              </li>
            )
          }
        })}
    </ol>
  )
}

Breadcrumb.propTypes = {
  id: PropTypes.string,
  path: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]), // Set cover theme
  className: PropTypes.string,
}

Breadcrumb.defaultProps = {
  theme: "light",
  className: "",
}
