"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface NavContextType {
  isUser: boolean;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context with a default placeholder (will be overridden by provider)
const NavContext = createContext<NavContextType | undefined>(undefined);

// Create provider to wrap around the app
export const NavProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isUser, setIsUser] = useState(true);

  return (
    <NavContext.Provider value={{ isUser, setIsUser }}>
      {children}
    </NavContext.Provider>
  );
};

// Custom hook to access context
export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
