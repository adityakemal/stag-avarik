// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Image
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

// import { Img } from "components/anti/utils/utils"

import imgSample from "./assets/bg_default.jpg"

export const Image = ({
  className,
  id,
  ratio,
  src,
  imgClassName,
  alt,
  onClick,
}) => {
  return (
    <>
      {ratio ? (
        <div
          className={`image ratio ${ratio} ${className}`}
          id={id}
          onClick={onClick}
        >
          <div className="outer-content">
            <div className="inner-content">
              <img src={src} className={`${imgClassName}`} alt={alt} />
            </div>
          </div>
        </div>
      ) : (
        <img src={src} className={`${imgClassName || className}`} alt={alt} />
      )}
    </>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.any,
  ratio: PropTypes.string, // e.g. .r-16-9, .r-sm-3-2, .r-md-4-3, .r-lg-5-4, .r-xl-1-1
  src: PropTypes.string,
  alt: PropTypes.string,
  imgClassName: PropTypes.string,
  onClick: PropTypes.any,
}

Image.defaultProps = {
  className: "",
  imgClassName: "",
  src: imgSample,
  alt: "Image",
}
