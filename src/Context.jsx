import { createContext, useContext, useState } from "react";
const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
  };
  return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
