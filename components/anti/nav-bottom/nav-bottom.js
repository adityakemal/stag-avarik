// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Nav Bottom
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

import { Card } from "components/anti"

export const NavBottom = ({
  prevTitle,
  prevImg,
  prevLink,
  nextTitle,
  nextImg,
  nextLink,
  className,
}) => {
  return (
    <div className={`nav-bottom ${className}`}>
      <div className="row row-0">
        <div className="col">
          <Card
            variant="overlay"
            imgOverlay="40"
            label="Previous"
            title={prevTitle}
            img={prevImg}
            imgHeight="h-150px"
            link={prevLink}
            className="nav-bottom-item prev"
          />
        </div>
        <div className="col">
          <Card
            variant="overlay"
            imgOverlay="40"
            label="Next"
            title={nextTitle}
            img={nextImg}
            imgHeight="h-150px"
            link={nextLink}
            className="nav-bottom-item next"
          />
        </div>
      </div>
    </div>
  )
}

NavBottom.propTypes = {
  prevTitle: PropTypes.string, // Set previous title
  prevImg: PropTypes.any, // Set previous image
  prevLink: PropTypes.string, // Set previous link / href
  nextTitle: PropTypes.string, // Set next title
  nextImg: PropTypes.any, // Set next image
  nextLink: PropTypes.string, // Set next link / href
  className: PropTypes.string, // Set cover optional classes
  children: PropTypes.any,
}

NavBottom.defaultProps = {
  prevLink: "",
  nextLink: "",
  className: "",
}
