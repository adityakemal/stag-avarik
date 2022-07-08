// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Cover
// ========================================================================================================================================

import React from "react";
import PropTypes from "prop-types";
// import scrollTo from "gatsby-plugin-smoothscroll" // Gatsby Project

import { Button } from "components/anti/buttons/buttons";
import { ImgRatio, BackgroundImage } from "components/anti/utils/utils";

import imgSample from "./assets/img_sample.jpg";
import imgArrowDown from "./assets/arrow_down.png";

// ==========================================================================
// Cover
// ==========================================================================

export const Cover = ({
  variant,
  theme,
  breadcrumb,
  img,
  imgMd,
  imgHeight,
  imgOverlay,
  label,
  labelClassName,
  title,
  titleLine1,
  titleLine2,
  titleClassName,
  text,
  textClassName,
  buttons,
  contentMaxWidth,
  containerClassName,
  className,
  children,
  scrollHint,
  scrollHintLink,
  scrollHintText,
  revealEffect,
}) => {
  const coverTheme = () => {
    return `cover-${theme}`;
  };

  const bgOverlay = () => {
    return `bg-overlay-${imgOverlay}`;
  };

  return (
    <div className={`cover cover-${variant} ${coverTheme()} ${className}`}>
      {breadcrumb && <div className="breadcrumb-wrapper">{breadcrumb}</div>}
      <div className={`cover-bg-wrapper`}>
        {/* Image responsive for MD Up*/}
        <BackgroundImage Tag="div" fluid={img} className={`cover-bg ${imgHeight} d-block d-md-none`}>
          <div className={`bg-overlay ${bgOverlay()}`} />
          <ImgRatio />
        </BackgroundImage>
        <BackgroundImage
          Tag="div"
          fluid={(imgMd && imgMd) || img}
          className={`cover-bg ${imgHeight} d-none d-md-block`}
        >
          <div className={`bg-overlay ${bgOverlay()}`} />
          <ImgRatio />
        </BackgroundImage>
      </div>
      <div className="cover-body">
        <div className={`container ${containerClassName}`}>
          <div className={`cover-content ${contentMaxWidth}`}>
            {label && (
              <p className={`cover-label ${labelClassName}`}>
                {revealEffect && (
                  <div className="overflow-hidden">
                    <span className="d-block">{label}</span>
                  </div>
                )}
                {label}
              </p>
            )}
            {title && (
              <h1 className={`cover-title ${titleClassName}`}>
                {revealEffect && (
                  <div className="overflow-hidden">
                    <span className="d-block">{title}</span>
                  </div>
                )}
                {title}
              </h1>
            )}
            {titleLine1 && titleLine2 && (
              <h1 className={`cover-title ${titleClassName}`}>
                {revealEffect && (
                  <>
                    <div className="overflow-hidden mb-1">
                      <span className="d-block">{titleLine1}</span>
                    </div>
                    <div className="overflow-hidden">
                      <span className="d-block">{titleLine2}</span>
                    </div>
                  </>
                )}
                <span className="d-block">{titleLine1}</span>
                <span className="d-block">{titleLine2}</span>
              </h1>
            )}
            {text && (
              <>
                {revealEffect && (
                  <div className={`cover-text ${textClassName}`}>
                    <div className="overflow-hidden">
                      <div dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                  </div>
                )}
                <div
                  className={`cover-text ${textClassName}`}
                  dangerouslySetInnerHTML={{
                    __html: text,
                  }}
                />
              </>
            )}
            {buttons && (
              <div className="btn-group">
                {buttons.map((button, i) => {
                  return (
                    <>
                      {revealEffect && (
                        <div className="overflow-hidden" key={i}>
                          <Button
                            variant={button.variant || "primary"}
                            link={button.link.url}
                            className={button.className || ""}
                          >
                            {button.text}
                          </Button>
                        </div>
                      )}
                      <Button
                        variant={button.variant || "primary"}
                        link={button.link.url}
                        className={button.className || ""}
                        key={i}
                      >
                        {button.text}
                      </Button>
                    </>
                  );
                })}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>

      {scrollHint && (
        <div
          // onClick={() => scrollTo(scrollHintLink)}
          className="scroll-hint w-text"
        >
          <img src={imgArrowDown} alt="Scroll hint" />
          <p>{scrollHintText}</p>
        </div>
      )}
    </div>
  );
};

Cover.propTypes = {
  variant: PropTypes.oneOf(["basic", "responsive", "fluid"]),
  theme: PropTypes.oneOf(["light", "dark"]),
  breadcrumb: PropTypes.element,
  img: PropTypes.any,
  imgHeight: PropTypes.string, // Set .cover-bg height / ratio with sizing utilities classes (e.g. .h-auto, .h-sm-100px, h-md-vw-100, .h-ratio-1-1, etc.)
  imgOverlay: PropTypes.any, // Set cover overlay %
  title: PropTypes.string,
  titleLine1: PropTypes.string,
  titleLine2: PropTypes.string,
  titleClassName: PropTypes.string,
  text: PropTypes.string,
  textClassName: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.any),
  contentMaxWidth: PropTypes.string, // Set .cover-content max width (with sizing utilities classes (e.g. .mw-md-500px, .mw-100, etc.)
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  scrollHint: PropTypes.bool,
  scrollHintLink: PropTypes.string,
  scrollHintText: PropTypes.string,
};

Cover.defaultProps = {
  img: imgSample,
  variant: "basic",
  theme: "dark",
  breadcrumb: null,
  contentMaxWidth: "mw-md-500px",
  imgHeight: "h-400px h-xs-500px h-md-600px",
  imgOverlay: 0,
  title: "Label",
  titleClassName: "",
  text: "Lorem Ipsum Dolor Siamet",
  textClassName: "",
  containerClassName: "",
  className: "",
  scrollHint: false,
  scrollHintLink: "#nextSection",
  scrollHintText: "Scroll down",
};

// ==========================================================================
// CoverContent
// ==========================================================================

// Cover with content inside
// Usually used for cover within pages (not on the top of the page)

export const CoverContent = ({ theme, img, imgHeight, imgOverlay, contentMaxWidth, className, children }) => {
  const coverTheme = () => {
    return `cover-${theme}`;
  };

  const bgOverlay = () => {
    return `bg-overlay-${imgOverlay}`;
  };

  return (
    <div className={`cover ${coverTheme()} ${className}`}>
      <div className={`cover-bg-wrapper`}>
        <BackgroundImage Tag="div" fluid={img} className={`cover-bg ${imgHeight}`}>
          <section className="cover-body py-main position-relative">
            <div className="container">
              <div className={`cover-content ${contentMaxWidth}`}>{children}</div>
            </div>
          </section>
          <div className={`bg-overlay ${bgOverlay()}`} />
          <ImgRatio />
        </BackgroundImage>
      </div>
    </div>
  );
};

CoverContent.propTypes = {
  theme: PropTypes.oneOf(["", "light", "dark"]), // Set cover theme
  img: PropTypes.any, // Set cover background image
  imgHeight: PropTypes.string, // Set .cover-bg height / ratio with sizing utilities classes (e.g. .h-auto, .h-sm-100px, h-md-vw-100, .h-ratio-1-1, etc.)
  imgOverlay: PropTypes.any, // Set cover overlay %
  contentMaxWidth: PropTypes.string, // Set .cover-content max width (with sizing utilities classes (e.g. .mw-md-500px, .mw-100, etc.)
  className: PropTypes.string, // Set cover optional classes
  children: PropTypes.any,
};

CoverContent.defaultProps = {
  theme: "",
  contentMaxWidth: "mw-md-500px",
  imgHeight: "h-auto",
  imgOverlay: 0,
  className: "",
};
