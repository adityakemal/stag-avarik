import React, { createContext, useState } from "react"

export const TransitionContext = createContext(undefined)

export const TransitionContextProvider = props => {
  const [transition, setTransition] = useState(true)
  return (
    <TransitionContext.Provider
      value={{
        transition: transition,
        setTransition: setTransition,
      }}
    >
      {props.children}
    </TransitionContext.Provider>
  )
}
