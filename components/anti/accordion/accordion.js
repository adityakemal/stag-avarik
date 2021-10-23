// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Accordion
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

import AccordionMaterial from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"

export const Accordion = ({
  forwardRef,
  id,
  variant,
  expandedKey,
  expandIcon,
  expandIconPlus,
  title,
  titleClassName,
  className,
  headerClassName,
  contentClassName,
  defaultExpanded,
  children,
}) => {
  const accordionVariant = () => {
    return `accordion-${variant}`
  }

  return (
    <AccordionMaterial
      className={`accordion ${className} ${accordionVariant()}`}
      id={id}
      ref={forwardRef}
      defaultExpanded={defaultExpanded === expandedKey}
      expandedKey={expandedKey}
    >
      <AccordionSummary
        expandIcon={expandIcon}
        className={`accordion-header ${headerClassName} ${expandIconPlus &&
          "accordion-header-plus"}`}
      >
        <h5 className={`accordion-title ${titleClassName}`}>{title}</h5>
        {expandIconPlus && (
          <div className="expand-plus">
            <div className="h-bar" />
            <div className="v-bar" />
          </div>
        )}
      </AccordionSummary>
      <AccordionDetails className={`accordion-content ${contentClassName}`}>
        {children}
      </AccordionDetails>
    </AccordionMaterial>
  )
}

Accordion.propTypes = {
  forwardRef: PropTypes.any,
  expandKey: PropTypes.any,
  expandIcon: PropTypes.any,
  expandIconPlus: PropTypes.bool,
  id: PropTypes.string,
  variant: PropTypes.oneOf("basic", "line"),
  onClick: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
}

Accordion.defaultProps = {
  expandIcon: <i className="air ai-angle-down" />,
  variant: "basic",
  title: "Title",
  titleClassName: "",
  className: "",
  headerClassName: "",
  contentClassName: "",
}
