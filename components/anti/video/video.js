// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Video
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

export const Video = ({
  id,
  poster,
  videoSrc,
  autoPlay,
  loop,
  muted,
  playsInline,
  preload,
  type,
  className,
}) => {
  return (
    <video
      id={id}
      className={`video-js ${className}`}
      poster={poster}
      data-setup="{}"
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      preload={preload}
      playsInline={playsInline}
    >
      <source src={videoSrc} type={type} />
    </video>
  )
}

Video.propTypes = {
  id: PropTypes.string,
  poster: PropTypes.any,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  preload: PropTypes.string,
  playsInline: PropTypes.bool,
  className: PropTypes.string,
}

Video.defaultProps = {
  className: "",
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  preload: "auto",
  type: "video/mp4",
}
