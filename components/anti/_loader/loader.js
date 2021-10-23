// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Loader
// ========================================================================================================================================

import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import Lottie from "react-lottie"

import { LoadingContext } from "context/loading-context"

import logoDark from "assets/img/common/logo_main-dark.png"
import logoLight from "assets/img/common/logo_main-light.png"
import loadingJSON from "assets/lottie/loading.json"

// ==========================================================================
// Loader
// ==========================================================================

export const Loader = ({ theme, variant, className, effect }) => {
  const [loader, setLoader] = useState(true)
  const { initialLoading, setInitialLoading } = useContext(LoadingContext)

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(prevInitialLoading => !prevInitialLoading)
    }, 2500) // default 3000 (2500 + 500 after delay)
  }, [setInitialLoading])

  useEffect(() => {
    if (!initialLoading) {
      setTimeout(() => {
        setLoader(false)
      }, 500)
    }
  }, [initialLoading])

  const loaderVariant = () => {
    return `loader-${variant}`
  }

  const loaderTheme = () => {
    return `loader-${theme}`
  }

  return (
    <>
      {/* prettier-ignore */}
      <div className={`loader ${loaderTheme()} ${loaderVariant()} ${effect} ${className} ${!loader ? "d-none" : ""}`}>
        {variant === "logo" && <img src={`${theme === "dark" ? logoLight : logoDark}`} className="img-brand img-fluid" alt="Logo" />}
        {variant === "spinner" && <div className="img-spinner" />}
        {variant === "lottie" && (
          <div className="img-lottie">
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: loadingJSON,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}

Loader.propTypes = {
  variant: PropTypes.oneOf(["logo", "spinner", "lottie"]),
  theme: PropTypes.oneOf(["dark", "light"]),
  effect: PropTypes.oneOf(["slideUp", "fadeOut"]),
  className: PropTypes.string,
}

Loader.defaultProps = {
  variant: "logo",
  theme: "dark",
  effect: "fadeOut",
  className: "",
}

// ==========================================================================
// Loader FM
// ==========================================================================

export const LoaderFM = ({ theme, variant, className, effect }) => {
  return (
    <div className={`loader ${theme} ${variant} ${className}`}>
      {variant === "logo" && (
        <img
          src={`${theme === "dark" ? logoLight : logoDark}`}
          className="loader-brand img-fluid"
          alt="Logo"
        />
      )}
      {variant === "spinner" && <div className="loader-spinner" />}
    </div>
  )
}

LoaderFM.propTypes = {
  variant: PropTypes.oneOf(["logo", "spinner"]),
  theme: PropTypes.oneOf(["dark", "light"]),
  effect: PropTypes.oneOf(["slideUp", "fadeOut"]),
  className: PropTypes.string,
}

LoaderFM.defaultProps = {
  variant: "logo",
  theme: "dark",
  effect: "fadeOut",
  className: "",
}
