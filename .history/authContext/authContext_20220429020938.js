import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const state = {};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ currentUser: state.useAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
