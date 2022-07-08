// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Page Transition
// ========================================================================================================================================

import React, { useState, useEffect, useContext } from "react";
// import { Link, navigate } from "gatsby"
import Link from "next/link";
// import { useRouter } from "next/router";
// import { motion, AnimatePresence } from "framer-motion";
import { TransitionContext } from "context/transition-context";

// const customTransition = { ease: [0.6, -0.05, 0.01, 0.9] };

// const customVarians = {
//   animate: {
//     height: [window.innerHeight, 0],
//     bottom: [null, 0],
//   },
//   initial: {
//     height: [0, window.innerHeight],
//     bottom: [window.innerHeight, 0],
//   },
// };

// const navigate = (to) => {
//   const router = useRouter();
//   router.push(to);
// };

export const TwoPanels = () => {
  const { transition } = useContext(TransitionContext);
  const [playState, setPlayState] = useState(transition);

  useEffect(() => {
    setPlayState(transition);
  }, [transition]);

  // return (
  //   <AnimatePresence>
  //     {playState && (
  //       <>
  //         <motion.div
  //           key={0}
  //           variants={customVarians}
  //           initial="initial"
  //           animate="animate"
  //           exit="initial"
  //           transition={{
  //             ...customTransition,
  //             duration: 1,
  //             times: [0, 0.5, 1],
  //           }}
  //           className="panel-background"
  //         ></motion.div>
  //       </>
  //     )}
  //   </AnimatePresence>
  // );
  return <div></div>;
};

export const FramerLink = (props) => {
  const { to, children } = props;
  const { setTransition } = useContext(TransitionContext);
  return (
    <Link
      href={to}
      // onClick={e => {
      //   e.preventDefault()
      //   setTransition(false)
      //   setTimeout(() => {
      //     navigate(to)
      //   }, 1000)
      // }}
    >
      {children}
    </Link>
  );
};
