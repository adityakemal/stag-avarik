// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Post
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

// ==========================================================================
// Post Header
// ==========================================================================

export const PostHeader = ({
  title,
  titleClassName,
  category,
  date,
  img,
  imgAlt,
  className,
  children,
}) => {
  const renderAttr = () => {
    if (category && date) {
      return (
        <>
          <span className="post-category">{category}</span>
          <span className="post-attr-divider">•</span>
          <span className="post-date">{date}</span>
        </>
      )
    } else if (category) {
      return <span className="post-category">{category}</span>
    } else if (date) {
      return <span className="post-date">{date}</span>
    } else {
      return null
    }
  }
  return (
    <>
      <div className={`post-header ${className}`}>
        {title && <h1 className={`h1 ${titleClassName}`}>{title}</h1>}
        {(category || date) && <div className="post-attr">{renderAttr()}</div>}
        {img && <img className="post-cover" src={img} alt={imgAlt || title} />}
        {children}
      </div>
    </>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.any,
  imgAlt: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
}

PostHeader.defaultProps = {
  titleClassName: "",
  className: "",
}

// ==========================================================================
// Post Content
// ==========================================================================

export const PostContent = ({ className, children }) => {
  return (
    <>
      <div className={`post-content ${className}`}>{children}</div>
    </>
  )
}

PostContent.propTypes = {
  className: PropTypes.string, // Set optional classes
  children: PropTypes.any,
}

PostContent.defaultProps = {
  className: "",
}
