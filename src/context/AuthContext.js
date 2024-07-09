import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// Initial state for the authentication context
const INITIAL_STATE = {
  // Setting currentUser from local storage or null
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

//authentication context creation
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  // Using AuthReducer with initial state
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Effect to update local storage when currentUser changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  // Returning JSX for the AuthContextProvider
  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
