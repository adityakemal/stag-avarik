// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Timeline
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

// Heading Link
export const Heading = ({ className, children }) => {
  return (
    <>
      <div className={`heading heading-single ${className}`}>{children}</div>
    </>
  )
}

Heading.propTypes = {
  className: PropTypes.string, // Set optional classes
  children: PropTypes.any,
}

Heading.defaultProps = {
  className: "",
}

// Heading Link
export const HeadingLink = ({ className, children }) => {
  return (
    <>
      <div className={`heading heading-link ${className}`}>{children}</div>
    </>
  )
}

HeadingLink.propTypes = {
  className: PropTypes.string, // Set optional classes
  children: PropTypes.any,
}

HeadingLink.defaultProps = {
  className: "",
}
