import React from "react";
import AppContext from "./Context";
import { useState } from "react";

export default function AppProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    token: "",
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
