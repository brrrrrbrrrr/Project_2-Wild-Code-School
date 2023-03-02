/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext, createContext } from "react";

const LoaderContext = createContext(false);

function LoaderProvider({ children }) {
  const [loader, setLoader] = useState(true);
  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
}

export const useLoader = () => useContext(LoaderContext);
export default LoaderProvider;
