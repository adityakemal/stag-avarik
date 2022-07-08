// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Modal
// ========================================================================================================================================

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import ReactModal from "react-modal"

export const Modal = ({
  id,
  isShowing,
  hide,
  img,
  imgClassName,
  imgAlt,
  title,
  titleClassName,
  text,
  textClassName,
  wrapperClassName,
  bodyClassName,
  contentClassName,
  className,
  children,
  anotherComponent,
}) => {
  useEffect(() => {
    const html = document.querySelector("html")
    const body = document.querySelector("body")
    if (isShowing === id) {
      body.classList.add("no-scroll")
      html.classList.add("no-scroll")
    } else {
      body.classList.remove("no-scroll")
      html.classList.remove("no-scroll")
    }
  }, [isShowing])
  return (
    <ReactModal
      closeTimeoutMS={500}
      isOpen={isShowing === id && true}
      contentLabel="Modal"
      onRequestClose={hide}
      className={`modal ${className}`}
      ariaHideApp={false}
    >
      {anotherComponent}
      <div className={`modal-wrapper ${wrapperClassName}`}>
        <div onClick={hide} className="close">
          <i className="ail ai-times" />
        </div>
        <div className={`modal-body ${bodyClassName}`}>
          {img && (
            <img
              src={img}
              className={`img-fluid w-100 ${imgClassName}`}
              alt={imgAlt}
            />
          )}
          <div className={`modal-content ${contentClassName}`}>
            {title && (
              <h3 className={`modal-title ${titleClassName} fadeInUp d1`}>
                {title}
              </h3>
            )}
            {text && (
              <p className={`modal-text ${textClassName} fadeInUp d2`}>
                {text}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </ReactModal>
  )
}

Modal.propTypes = {
  // isShowing: PropTypes.bool,
  // hide: PropTypes.bool,
  img: PropTypes.any,
  imgClassName: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  text: PropTypes.string,
  textClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
}

Modal.defaultProps = {
  imgClassName: "",
  imgAlt: "Modal Image",
  titleClassName: "",
  textClassName: "",
  wrapperClassName: "",
  bodyClassName: "",
  contentClassName: "",
  className: "",
}

// █░█ █▀█ █░█░█   ▀█▀ █▀█   █░█ █▀ █▀▀
// █▀█ █▄█ ▀▄▀▄▀   ░█░ █▄█   █▄█ ▄█ ██▄

// Import
// import { Modal } from "components/anti/modal/modal"

// Set states
// const [modal, setModal] = useState(null)

// Set Trigger
// <Button onClick={() => setModal("modal-name")}>
//   Button
// </Button>

// Set Modal
// <Modal
//   id="modal-name"
//   isShowing={modal}
//   className="modal-name"
//  hide={() => setModal(null)}
// >
//   Lorem ipsum
// </Modal>
