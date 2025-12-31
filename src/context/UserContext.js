import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(() => {
    const localData = sessionStorage.getItem("jwt");
    return localData ? JSON.parse(localData) : null;
  });

  useEffect(() => {
    if (jwt) sessionStorage.setItem("jwt", JSON.stringify(jwt));
    else sessionStorage.removeItem("jwt");
  }, [jwt]);

  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
