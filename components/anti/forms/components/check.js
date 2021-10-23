// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Check
// ==========================================================================

import React from "react"
import PropTypes from "prop-types"
import { Field } from "formik"

export const Check = ({
  formik,
  id,
  name,
  value,
  label,
  className,
  labelClassName,
  inputClassName,
  img,
  onClick,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <>
      {formik ? (
        <div className={`form-check ${className}`} onClick={onClick}>
          <Field
            type="checkbox"
            id={id}
            name={name}
            className={`form-check-input ${inputClassName}`}
            checked={checked}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
          <div className="el-after" />
          <label className={`form-check-label ${labelClassName}`} htmlFor={id}>
            {label}
          </label>
        </div>
      ) : (
        <div className={`form-check ${className}`} onClick={onClick}>
          <input
            type="checkbox"
            id={id}
            name={name}
            className={`form-check-input ${inputClassName}`}
            checked={checked}
            value={""}
            onChange={onChange}
            disabled={disabled}
          />
          <div className="el-after" />
          <label className={`form-check-label ${labelClassName}`} htmlFor={id}>
            {label}
          </label>
        </div>
      )}
    </>
  )
}

Check.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.any,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  defaultValue: PropTypes.array,
}

Check.defaultProps = {
  id: "",
  className: "",
  labelClassName: "",
  inputClassName: "",
  defaultValue: [25, 30],
}
