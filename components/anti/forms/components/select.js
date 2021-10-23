// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Select
// ==========================================================================

import React from "react"
import PropTypes from "prop-types"
import ReactSelect from "react-select"

export const Select = ({
  id,
  name,
  variant,
  label,
  placeholder,
  value,
  formText,
  onChange,
  onBlur,
  error,
  touched,
  iconRight,
  iconLeft,
  floatingLabel,
  options,
  isDisabled,
  isLoading,
  isClearable,
  isRtl,
  isSearchable,
  className,
  classNamePrefix,
  wrapperClassName,
  labelClassName,
  inputClassName,
  forwardRef,
  onInputChange,
  openMenuOnFocus,
  onFocus,
}) => {
  const fieldVariant = () => {
    if (variant === "underline") {
      return "field-underline"
    } else {
      return "field-basic"
    }
  }
  const handleChange = arg => {
    onChange(id, arg)
  }
  const handleBlur = () => {
    if (onBlur) return onBlur(id, true)
  }

  return (
    <div
      className={`field ${fieldVariant()} 
        ${floatingLabel ? "field-floating" : ""} 
        ${className} `}
    >
      {label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={`form-select-wrapper rs
          ${iconRight ? "ic-right" : ""}
          ${iconLeft ? "ic-left" : ""}
          ${wrapperClassName}`}
      >
        <ReactSelect
          id={id}
          className={`form-select ${variant} ${className}`}
          classNamePrefix={classNamePrefix}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          options={options}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          ref={forwardRef}
          onInputChange={onInputChange ? e => onInputChange(e) : () => {}}
          openMenuOnFocus={openMenuOnFocus}
          onFocus={onFocus ? () => onFocus() : () => {}}
        />
        {floatingLabel && (
          <label className={labelClassName} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
      {!!error && touched && <div className="form-text">{error}</div>}
      {formText && <div className="form-text">{formText}</div>}
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  classNamePrefix: PropTypes.string,
  options: PropTypes.any,
  placeholder: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isRtl: PropTypes.bool,
  isSearchable: PropTypes.bool,
}

Select.defaultProps = {
  variant: "basic-single",
  className: "",
  classNamePrefix: "select",
  isSearchable: false,
  placeholder: "Choose...",
}
