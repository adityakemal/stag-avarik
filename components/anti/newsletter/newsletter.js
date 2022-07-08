// // ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// // ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// // ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// // The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// // please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// // ========================================================================================================================================
// // Nesletter
// // ========================================================================================================================================

// import React, { useState } from "react"
// import PropTypes from "prop-types"

// import addToMailchimp from "gatsby-plugin-mailchimp"
// import { Formik } from "formik"

// import { Input } from "components/anti/forms/forms"
// import { Button } from "components/anti/buttons/buttons"

// export const Newsletter = ({
//   btnName,
//   btnClassName,
//   btnVariant,
//   className,
//   placeholder,
//   existMsg,
//   successMsg,
//   failedMsg,
//   floatingLabel,
//   variant,
//   theme,
//   label,
//   inputClassName,
// }) => {
//   const [error, setError] = useState("")
//   const [status, setStatus] = useState(false)
//   const [email, setEmail] = useState("")
//   const handleChange = e => {
//     setEmail(e.target.value)
//   }
//   const handleSubmit = async e => {
//     e.preventDefault()
//     setStatus(true)
//     const result = await addToMailchimp(email)
//     if (result.msg == "Thank you for subscribing!") {
//       setError(successMsg)
//       setStatus(false)
//     } else if (result.msg == "The email you entered is not valid.") {
//       setError(failedMsg)
//       setStatus(false)
//     } else {
//       setError(existMsg)
//       setStatus(false)
//     }
//   }
//   return (
//     <div className={`newsletter ${className}`}>
//       <Formik>
//         <>
//           <div className="input-group">
//             <Input
//               formik
//               floatingLabel={floatingLabel}
//               variant={variant}
//               theme={theme}
//               label={label}
//               placeholder={placeholder}
//               inputClassName={inputClassName}
//               as="input"
//               type="email"
//               id="email"
//               name="email"
//               onChange={handleChange}
//               errors={error}
//             />
//             <div className="input-group-append">
//               <Button
//                 variant={btnVariant}
//                 className={`newsletter-submit ${btnClassName} ${status &&
//                   "loading"}`}
//                 loader={status && true}
//                 onClick={handleSubmit}
//               >
//                 {btnName}
//               </Button>
//             </div>
//           </div>
//           <small>{error}</small>
//         </>
//       </Formik>
//     </div>
//   )
// }

// Newsletter.propTypes = {
//   btnName: PropTypes.string,
//   btnClassName: PropTypes.string,
//   btnVariant: PropTypes.string,
//   className: PropTypes.string,
//   placeholder: PropTypes.string,
//   existMsg: PropTypes.string,
//   successMsg: PropTypes.string,
//   failedMsg: PropTypes.string,
//   floatingLabel: PropTypes.bool,
//   variant: PropTypes.oneOf(["basic", "underline"]),
//   theme: PropTypes.oneOf(["light", "dark"]),
//   label: PropTypes.string,
//   inputClassName: PropTypes.string,
// }

// Newsletter.defaultProps = {
//   btnName: "Send",
//   btnClassName: "",
//   btnVariant: "primary",
//   className: "",
//   placeholder: "Enter Email",
//   successMsg: "Thank you for subscribing!",
//   failedMsg: "The email you entered is not valid.",
//   existMsg: "Email is already registered.",
//   floatingLabel: false,
//   variant: "basic",
//   theme: "light",
//   label: null,
// }
