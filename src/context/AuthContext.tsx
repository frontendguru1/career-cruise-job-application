import React, { createContext, useState, FunctionComponent } from "react";

interface AuthContextProps {
  user: string;
  setUserDetails: (data: any) => void; // Function that accepts any type of data and returns void
}

// Initialize the context with a default value matching the expected structure
export const AuthContext = createContext<AuthContextProps>({
  user: "",
  setUserDetails: (data: any) => {}, // Provide a default no-op function
});

// Specify the correct type for the children prop using React.ReactNode
export const AuthContextProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState("");

  const setUserDetailsHandler = (data: any) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUserDetails: setUserDetailsHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
