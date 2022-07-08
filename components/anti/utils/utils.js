// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Timeline
// ========================================================================================================================================

import React from "react";
import PropTypes from "prop-types";
// import GatsbyBackgroundImage from "gatsby-background-image" // Gatsby Project
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image" // Gatsby Project
// import queryString from "query-string";
// import { Location } from "@reach/router";

import ratio1by1 from "./assets/r1-1.png";
import ratio1by2 from "./assets/r1-2.png";
import ratio2by1 from "./assets/r2-1.png";
import ratio2by3 from "./assets/r2-3.png";
import ratio3by2 from "./assets/r3-2.png";
import ratio4by5 from "./assets/r4-5.png";
import ratio5by4 from "./assets/r5-4.png";
import ratio9by16 from "./assets/r9-16.png";
import ratio16by9 from "./assets/r16-9.png";

// ==========================================================================
// Image Ratio
// ==========================================================================

export const ImgRatio = () => {
  return (
    // prettier-ignore
    <>
      <img className="img-ratio img-ratio-1-1 w-100" src={ratio1by1} alt="1by1" />
      <img className="img-ratio img-ratio-1-2 w-100" src={ratio1by2} alt="1by2" />
      <img className="img-ratio img-ratio-2-1 w-100" src={ratio2by1} alt="2by1" />
      <img className="img-ratio img-ratio-2-3 w-100" src={ratio2by3} alt="2by3" />
      <img className="img-ratio img-ratio-3-2 w-100" src={ratio3by2} alt="3by2" />
      <img className="img-ratio img-ratio-4-5 w-100" src={ratio4by5} alt="4by5" />
      <img className="img-ratio img-ratio-5-4 w-100" src={ratio5by4} alt="5by4" />
      <img className="img-ratio img-ratio-9-16 w-100" src={ratio9by16} alt="9by16" />
      <img className="img-ratio img-ratio-16-9 w-100" src={ratio16by9} alt="16by9" />
    </>
  );
};

// ==========================================================================
// Image
// ==========================================================================

// █▀▀ ▄▀█ ▀█▀ █▀ █▄▄ █▄█
// █▄█ █▀█ ░█░ ▄█ █▄█ ░█░

// export const Img = ({ src, alt, className }) => {
//   if (typeof src === "object") {
//     return <GatsbyImage image={src} alt={alt} className={className} />
//   } else {
//     return (
//       <>
//         <img src={src} alt={alt} className={className} />
//         {/* <StaticImage
//           src={src}
//           alt={alt}
//           className={className}
//           formats={["AUTO", "WEBP", "AVIF"]}
//           placeholder="none"
//         /> */}
//       </>
//     )
//   }
// }

// █▄░█ █▀▀ ▀▄▀ ▀█▀
// █░▀█ ██▄ █░█ ░█░

export const Img = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

// ==========================================================================
// Background Image
// ==========================================================================

// █▀▀ ▄▀█ ▀█▀ █▀ █▄▄ █▄█
// █▄█ █▀█ ░█░ ▄█ █▄█ ░█░

// export const BackgroundImage = props => {
//   if (typeof props.fluid === "object") {
//     return (
//       <GatsbyBackgroundImage {...props}>{props.children}</GatsbyBackgroundImage>
//     )
//   } else {
//     return (
//       <div
//         className={props.className}
//         style={{
//           background: `url(${props.fluid}) no-repeat center`,
//           backgroundSize: "cover",
//         }}
//       >
//         {props.children}
//       </div>
//     )
//   }
// }

// BackgroundImage.propTypes = {
//   fluid: PropTypes.any,
//   Tag: PropTypes.string,
//   className: PropTypes.string,
// }

// BackgroundImage.defaultProps = {
//   Tag: "div",
//   className: "",
// }

// █▄░█ █▀▀ ▀▄▀ ▀█▀
// █░▀█ ██▄ █░█ ░█░

export const BackgroundImage = (props) => {
  return (
    <div
      className={props.className}
      style={{
        backgroundImage: `url(${props.fluid})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {props.children}
    </div>
  );
};

BackgroundImage.propTypes = {
  fluid: PropTypes.any,
  Tag: PropTypes.string,
  className: PropTypes.string,
};

BackgroundImage.defaultProps = {
  Tag: "div",
  className: "",
};

// ==========================================================================
// With Location
// ==========================================================================

// export const WithLocation = (ComponentToWrap) => (props) =>
//   (
//     <Location>
//       {({ location, navigate }) => (
//         <ComponentToWrap
//           {...props}
//           location={location}
//           navigate={navigate}
//           search={location.search ? queryString.parse(location.search) : {}}
//         />
//       )}
//     </Location>
//   );
