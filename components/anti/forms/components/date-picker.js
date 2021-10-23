// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Date Picker
// ==========================================================================

import React from "react"
import PropTypes from "prop-types"
import ReactDatePicker from "react-datepicker"

export const DatePicker = ({
  selected,
  onChange,
  name,
  placeholder,
  wrapperClassName,
  className,
  touched,
  errors,
  setFieldValue,
}) => {
  const onDateChange = (selected, setFieldValue) =>
    setFieldValue(name, selected)

  return (
    <>
      <ReactDatePicker
        name={name}
        className={`form-control ${className}`}
        placeholderText={placeholder}
        wrapperClassName={wrapperClassName}
        selected={selected}
        onChange={
          setFieldValue ? value => onDateChange(value, setFieldValue) : onChange
        }
      />
      {touched && errors && touched[name] && errors[name] && (
        <div className="validation-error">{errors[name]}</div>
      )}
    </>
  )
}

DatePicker.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
}

DatePicker.defaultProps = {
  name: "",
  placeholder: "",
  wrapperClassName: "",
  className: "",
}
