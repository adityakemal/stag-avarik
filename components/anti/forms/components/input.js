// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Input
// ==========================================================================

import React from "react"
import PropTypes from "prop-types"
import { Field } from "formik"

export const Input = ({
  formik,
  id,
  name,
  variant,
  theme,
  as,
  type,
  label,
  placeholder,
  value,
  formText,
  onChange,
  onBlur,
  errors,
  touched,
  iconRight,
  iconLeft,
  floatingLabel,
  className,
  wrapperClassName,
  labelClassName,
  inputClassName,
  children,
  disabled,
  hideValidationText,
  rows,
}) => {
  const fieldVariant = () => {
    if (variant === "underline") {
      return "field-underline"
    } else {
      return "field-basic"
    }
  }

  return (
    <div
      className={`field ${fieldVariant()} 
        ${theme} 
        ${floatingLabel ? "field-floating" : ""} 
        ${touched && errors && touched[name] && errors[name] ? "is-invalid" : ""}
        ${className} `}
    >
      {label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}

      {as === "input" && (
        <div
          className={`form-control-wrapper
          ${iconRight ? "ic-right" : ""}
          ${iconLeft ? "ic-left" : ""}
          ${wrapperClassName}`}
        >
          {formik ? (
            <Field
              id={id}
              placeholder={placeholder}
              name={name}
              className={`form-control ${inputClassName}`}
              type={type}
              disabled={disabled}
              as="input"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            />
          ) : (
            <input
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              className={`form-control ${inputClassName}`}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              disabled={disabled}
            />
          )}
          {floatingLabel && (
            <label className={labelClassName} htmlFor={id}>
              {label}
            </label>
          )}
          <i className="el-underline" />
          {children}
        </div>
      )}

      {as === "textarea" && (
        <div
          className={`form-control-wrapper
          ${iconRight ? "ic-right" : ""}
          ${iconLeft ? "ic-left" : ""}
          ${wrapperClassName}`}
        >
          {formik ? (
            <Field
              id={id}
              placeholder={placeholder}
              name={name}
              className={`form-control ${inputClassName}`}
              disabled={disabled}
              as="textarea"
              rows={rows}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            />
          ) : (
            <textarea
              id={id}
              name={name}
              placeholder={placeholder}
              className={`form-control ${inputClassName}`}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              disabled={disabled}
              rows={rows}
            />
          )}

          {floatingLabel && (
            <label className={labelClassName} htmlFor={id}>
              {label}
            </label>
          )}
          <i className="el-underline" />
          {children}
        </div>
      )}

      {as === "select" && (
        <div
          className={`form-select-wrapper
          ${iconRight ? "ic-right" : ""}
          ${iconLeft ? "ic-left" : ""}
          ${wrapperClassName}`}
        >
          {floatingLabel && (
            <label className={labelClassName} htmlFor={id}>
              {label}
            </label>
          )}
          {formik ? (
            <Field
              id={id}
              placeholder={placeholder}
              name={name}
              className={`form-control ${inputClassName}`}
              disabled={disabled}
              as="select"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            >
              {children}
            </Field>
          ) : (
            <select
              id={id}
              name={name}
              className={`form-control ${inputClassName}`}
              disabled={disabled}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            >
              {children}
            </select>
          )}
          <i className="el-underline" />
        </div>
      )}

      {!hideValidationText && (
        <>
          {touched && errors && touched[name] && errors[name] && (
            <div className="invalid-feedback">{errors[name]}</div>
          )}
        </>
      )}
      {formText && <div className="form-text">{formText}</div>}
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  variant: PropTypes.oneOf(["basic", "underline"]),
  theme: PropTypes.oneOf(["light", "dark"]),
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  as: PropTypes.string,
  value: PropTypes.string,
  floatingLabel: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  children: PropTypes.any,
}

Input.defaultProps = {
  id: "",
  type: "text",
  variant: "basic",
  theme: "light",
  label: null,
  as: "input",
  placeholder: "Enter text",
  className: "",
  labelClassName: "",
  inputClassName: "",
  wrapperClassName: "",
  hideValidationText: false,
}
