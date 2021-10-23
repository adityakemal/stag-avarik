import React from "react"
import { TransitionContextProvider } from "context/transition-context"
import { TwoPanels } from "components/anti/page-transition/page-transition"

const LayoutTransition = ({ children }) => {
  return (
    <>
      <TransitionContextProvider>
        <main>{children}</main>
        <TwoPanels />
      </TransitionContextProvider>
    </>
  )
}

export default LayoutTransition
