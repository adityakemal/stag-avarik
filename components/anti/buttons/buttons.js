// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Buttons
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

import { Link } from "components/anti"

// ==========================================================================
// Button
// ==========================================================================

export const Button = ({
  id,
  variant,
  iconLeft,
  iconRight,
  link,
  target,
  size,
  className,
  onClick,
  children,
  disabled,
}) => {
  const btnSize = () => {
    return `btn-${size}`
  }

  const btnVariant = () => {
    return `btn-${variant}`
  }

  // prettier-ignore
  if (link) {
    return (
      <Link
        to={link}
        target={target}
        className={`btn ${btnVariant()} ${size ? btnSize() : ""} ${iconLeft ? "btn-ic-left" : ""} ${iconRight ? "btn-ic-right" : ""} ${className}`}
        id={id}
        onClick={onClick}
        disabled={disabled}
      >
        <span>
          {typeof iconLeft === "string" && <i className={`${iconLeft} el-ai-before`} />}
          {children}
          {typeof iconRight === "string" && <i className={`${iconRight} el-ai-after`} />}
        </span>
        <div className="el-block" />
        <div className="el-loader" />
      </Link>
    )
  } else {
    return (
      <button
        className={`btn ${btnVariant()} ${size ? btnSize() : ""} ${iconLeft ? "btn-ic-left" : ""} ${iconRight ? "btn-ic-right" : ""} ${className}`}
        id={id}
        onClick={(e) => {
          e.preventDefault()
          onClick(e)
        }}
        disabled={disabled}
      >
        <span>
          {typeof iconLeft === "string" && <i className={`${iconLeft} el-ai-before`} />}
          {children}
          {typeof iconRight === "string" && <i className={`${iconRight} el-ai-after`} />}
        </span>
        <div className="el-block" />
        <div className="el-loader" />
      </button>
    )
  }
}

Button.propTypes = {
  variant: PropTypes.string, // Set variant (based on Bootstrap classes)
  link: PropTypes.string, // Set button link / href
  target: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf(["", "sm", "lg", null]), // Set button size
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.any,
  loader: PropTypes.bool,
  children: PropTypes.any,
}

Button.defaultProps = {
  variant: "primary",
  target: null,
  loader: null,
  icon: "",
  className: "",
}

// ==========================================================================
// Button Group
// ==========================================================================

export const ButtonGroup = ({
  size,
  btnMargin,
  stackedSmDown,
  className,
  id,
  children,
}) => {
  const btnGroupSize = () => {
    return `btn-group-${size}`
  }

  return (
    <div
      className={`btn-group 
        ${size && btnGroupSize()} ${btnMargin} 
        ${stackedSmDown && "d-sm-down-stacked"} ${className}`}
      id={id}
    >
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  size: PropTypes.oneOf(["", "sm", "lg", null]), // Set button size
  btnMargin: PropTypes.string, // Set button margin (e.g. .mx-1, .mx-2, .mx-3, .mx-10px, .mx-20px, etc.)
  stackedSmDown: PropTypes.bool, // Set button to be stacked on sm down (retaining margin set by .mx-*)
  className: PropTypes.string,
  children: PropTypes.any,
}

ButtonGroup.defaultProps = {
  btnMargin: "mx-2",
  stackedSmDown: false,
  className: "",
}
