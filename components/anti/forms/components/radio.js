// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Radio
// ==========================================================================

import React from "react"
import { Field } from "formik"
import PropTypes from "prop-types"

export const Radio = ({
  formik,
  id,
  name,
  value,
  label,
  className,
  labelClassName,
  inputClassName,
  img,
  handleChangeFilter,
  isChecked,
  onChange,
  onClick,
  disabled,
}) => {
  return (
    <>
      {formik ? (
        <div
          className={`form-check ${className}`}
          onClick={onClick} // Formik
        >
          <Field
            type="radio"
            id={id}
            name={name}
            className={`form-check-input ${inputClassName}`}
            checked={!isChecked ? false : true}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
          <div className="el-after" />
          <label className={`form-check-label ${labelClassName}`} htmlFor={id}>
            <span>
              {img && <img src={img} className="img-fluid" alt={name} />}
              {label}
            </span>
          </label>
        </div>
      ) : (
        <div
          className={`form-check ${className}`}
          onClick={() => handleChangeFilter(value)}
        >
          <input
            type="radio"
            id={id}
            name={name}
            className={`form-check-input ${inputClassName}`}
            checked={!isChecked ? false : true}
            value={null}
            onChange={onChange}
            disabled={disabled}
          />
          <div className="el-after" />
          <label className={`form-check-label ${labelClassName}`} htmlFor={id}>
            <span>
              {img && <img src={img} className="img-fluid" alt={name} />}
              {label}
            </span>
          </label>
        </div>
      )}
    </>
  )
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.any,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  defaultValue: PropTypes.array,
}

Radio.defaultProps = {
  id: "",
  className: "",
  labelClassName: "",
  inputClassName: "",
  defaultValue: [25, 30],
}
