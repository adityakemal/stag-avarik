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

import { Button } from "components/anti"

export const Feature = ({
  img,
  imgAltText,
  title,
  titleClassName,
  text,
  btnText,
  btnLink,
  className,
  children,
}) => {
  return (
    <>
      <div className={`feature ${className}`}>
        {img && (
          <img
            data-testid="image-elmnt"
            className="feature-img"
            src={img}
            alt={imgAltText || title}
          />
        )}
        <div className="feature-body">
          {title && (
            <h4
              data-testid="title"
              className={`feature-title ${titleClassName}`}
            >
              {title}
            </h4>
          )}
          {text && (
            <p data-testid="text" className="feature-text">
              {text}
            </p>
          )}
          {btnText && (
            <Button data-testid="text" variant="link" link={btnLink}>
              {btnText}
            </Button>
          )}
          {children}
        </div>
      </div>
    </>
  )
}

Feature.propTypes = {
  img: PropTypes.any, // Set feature image (commonly icon)
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
}

Feature.defaultProps = {
  titleClassName: "",
  className: "",
}
