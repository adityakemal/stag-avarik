// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Link
// ========================================================================================================================================

// █▀▀ ▄▀█ ▀█▀ █▀ █▄▄ █▄█
// █▄█ █▀█ ░█░ ▄█ █▄█ ░█░
// import GatsbyLink from "gatsby-link" // Gatsby Project

// █▄░█ █▀▀ ▀▄▀ ▀█▀
// █░▀█ ██▄ █░█ ░█░
import NextLink from "next/link"; // Next Project

import React, { useState } from "react";
import { nanoid } from "nanoid";
import YouTube from "react-youtube";
import { Modal } from "components/anti";

const videoOptions = {
  playerVars: {
    autoplay: 1,
    controls: 1,
    rel: 0,
    showinfo: 0,
    mute: 0,
    color: "white",
    fs: 1,
    modestbranding: 1,
  },
};

const detectSrc = (url) => {
  if (url.includes("watch?v=")) {
    return url.split("watch?v=")[1];
  } else {
    return url.substring(url.lastIndexOf("/") + 1);
  }
};

export const Link = (props) => {
  const [modal, setModal] = useState();
  const [id] = useState(nanoid);
  // If <Link> target is "_blank", show normal <a> element
  if (props.target === "_blank") {
    return (
      // prettier-ignore
      <a
        className={typeof props.children === "string" ? "btn btn-link" : props.className ? props.className : ""}
        href={props.to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );

    // If <Link> target is "", show normal <Link> element
  } else if (props.target === "") {
    const config = process.env.ROOT_URL;
    const rawUrl = props.to && props.to;
    const url = rawUrl.split(config);
    return (
      <>
        {/* █▀▀ ▄▀█ ▀█▀ █▀ █▄▄ █▄█
            █▄█ █▀█ ░█░ ▄█ █▄█ ░█░ */}
        <GatsbyLink {...props} to={url.length > 1 ? url[1] : url[0]} onClick={props.onClick}>
          {props.children}
        </GatsbyLink>

        {/* █▄░█ █▀▀ ▀▄▀ ▀█▀
            █░▀█ ██▄ █░█ ░█░ */}
        {/* <NextLink href={url ? (url.length > 1 ? url[1] : url[0]) : "/"}>
          <a {...props}>{props.children}</a>
        </NextLink> */}
      </>
    );
  } else {
    // If <Link> starts with "/" which indicates internal Gatsby Link
    if (props.to && props.to.startsWith("/")) {
      return (
        <>
          {/* █▀▀ ▄▀█ ▀█▀ █▀ █▄▄ █▄█
              █▄█ █▀█ ░█░ ▄█ █▄█ ░█░ */}
          {/* <GatsbyLink {...props}>{props.children}</GatsbyLink> */}

          {/* █▄░█ █▀▀ ▀▄▀ ▀█▀
              █░▀█ ██▄ █░█ ░█░ */}
          <NextLink href={props.to ? props.to : "/"}>
            <a {...props}>{props.children}</a>
          </NextLink>
        </>
      );

      // If props.to is blank
    } else if (props.to === "") {
      return <div {...props}>{props.children}</div>;

      // If props.to is YouTube URL
    } else if (props.to?.includes("youtube.com") || props.to?.includes("youtu.be")) {
      const youtubeSrc = detectSrc(props.to);

      return (
        <>
          <div data-testid="youtube-link" className={`${props.className}`} onClick={() => setModal(`${id}`)}>
            {props.children}
          </div>
          <Modal
            id={id}
            isShowing={modal}
            hide={() => setModal(null)}
            className="modal-xl modal-youtube"
            modalBodyClassName="p-0"
          >
            <div className="embed-responsive embed-responsive-16by9">
              <YouTube videoId={youtubeSrc} opts={videoOptions} className="embed-responsive-item" />
            </div>
          </Modal>
        </>
      );
      // Default
    } else {
      return (
        <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      );
    }
  }
};
