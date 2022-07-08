import React, { createContext, useState } from "react"

export const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [initialLoading, setInitialLoading] = useState(true)
  return (
    <LoadingContext.Provider value={{ initialLoading, setInitialLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}
