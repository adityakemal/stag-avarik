// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Loader
// ========================================================================================================================================

import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";

import { LoadingContext } from "context/loading-context";

import logoDark from "assets/img/common/logo_main-dark.png";
import logoLight from "assets/img/common/logo_main-light.png";
import loadingJSON from "assets/lottie/loading.json";

export const Loader = ({ theme, variant, className, effect }) => {
  const [loader, setLoader] = useState(false);
  const { initialLoading, setInitialLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (initialLoading) {
      setLoader(true);
      setTimeout(() => {
        // setInitialLoading(prevInitialLoading => !prevInitialLoading)

        setTimeout(() => {
          setLoader(false);
        }, 500);
      }, 2500);
    }
  }, [setInitialLoading]);

  const loaderVariant = () => {
    return `loader-${variant}`;
  };

  const loaderTheme = () => {
    return `loader-${theme}`;
  };

  return (
    <>
      {/* prettier-ignore */}
      <div className={`loader ${loaderTheme()} ${loaderVariant()} ${effect} ${className} ${!initialLoading ? `loader-exit ${!loader ? `d-none` : ``}` : ""}`}>
        {variant === "image" && <img src={`${theme === "dark" ? logoLight : logoDark}`} className="img-brand img-fluid" alt="Logo" />}
        {variant === "spinner" && <div className="img-spinner-wrapper"><div className="img-spinner" /></div>}
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
  );
};

Loader.propTypes = {
  variant: PropTypes.oneOf(["image", "spinner", "lottie"]),
  theme: PropTypes.oneOf(["dark", "light"]),
  effect: PropTypes.oneOf(["slideOutUp", "fadeOut"]),
  className: PropTypes.string,
};

Loader.defaultProps = {
  variant: "image",
  theme: "dark",
  effect: "fadeOut",
  className: "",
};
