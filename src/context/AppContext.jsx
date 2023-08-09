import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [subActive, setSubActive] = useState(0);
  const [item, setItem] = useState("");
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  const [countRocket, setCountRocket] = useState(0);

  return (
    <AppContext.Provider
      value={{
        subActive,
        setSubActive,
        active,
        setActive,
        item,
        setItem,
        visible,
        setVisible,
        countRocket,
        setCountRocket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(AppContext);
}
