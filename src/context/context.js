import { createContext, useState, useEffect } from "react";

import { onStateChanged, signOutUser } from "../utils/firebase/firebase";

// Value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    
    const stopListen = onStateChanged((user) => {
      setCurrentUser(user)
    })
  
    return stopListen;
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
