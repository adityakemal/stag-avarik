import React from "react"
import PropTypes from "prop-types"

import { Button } from "components/anti"

export const DemoHeader = ({ id, className, title }) => {
  return (
    <section
      className={`sc-demo-details__header py-main-sm ${className}}`}
      id={id}
    >
      <div className="container mw-xl">
        <Button
          variant="link"
          link="/demo"
          iconLeft="air ai-angle-left"
          className="py-2"
        >
          Back
        </Button>
        <h1>{title}</h1>
      </div>
    </section>
  )
}

DemoHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
}

DemoHeader.defaultProps = {
  title: "Title",
  className: "",
}

export const DemoContent = ({
  id,
  className,
  title,
  text,
  children,
  noContainer,
}) => {
  return (
    <section
      className={`sc-demo-details__content py-main-sm ${className}`}
      id={id}
    >
      <div className="container mw-xl">
        <div className="heading">
          <h2>{title}</h2>
          {text}
        </div>
      </div>
      {!noContainer && <div className="container mw-xl">{children}</div>}
      {noContainer && children}
    </section>
  )
}

DemoContent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
}

DemoContent.defaultProps = {
  title: "Title",
  text: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum quae
      quis in omnis quisquam, quia beatae inventore fugit facere dolorem
      molestias? Corrupti expedita, laboriosam cupiditate deserunt quibusdam ad
      sint?
    </p>
  ),
  className: "",
}
