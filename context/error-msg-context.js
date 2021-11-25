import React, { createContext, useState } from "react";

export const ErrorStateContext = createContext();

export const ErrorStateProvider = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState();
  return <ErrorStateContext.Provider value={{ errorMsg, setErrorMsg }}>{children}</ErrorStateContext.Provider>;
};
