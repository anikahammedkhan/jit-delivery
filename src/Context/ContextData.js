import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const ContextData = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const data = {
    language,
    setLanguage,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default ContextData;
