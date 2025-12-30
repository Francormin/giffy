import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const localData = localStorage.getItem("user");
    return localData ? JSON.parse(localData) : null;
  });

  useEffect(
    () => localStorage.setItem("user", JSON.stringify(user)),
    [user]
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
