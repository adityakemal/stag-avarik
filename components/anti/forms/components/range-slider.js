// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ==========================================================================
// Forms - Range Slider
// ==========================================================================

import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"

export const RangeSlider = ({ className, defaultValue, label }) => {
  const [value, setValue] = React.useState(defaultValue)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      {label && (
        <Typography id="range-slider" gutterBottom>
          {label}
        </Typography>
      )}
      <Slider
        className={className}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  )
}

RangeSlider.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.array,
}

RangeSlider.defaultProps = {
  className: "",
  defaultValue: [25, 30],
}
