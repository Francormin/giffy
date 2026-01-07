import { createContext, useEffect, useState } from "react";
import getFavs from "services/getFavs";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const [jwt, setJwt] = useState(() => {
    const localData = sessionStorage.getItem("jwt");
    return localData ? JSON.parse(localData) : null;
  });

  useEffect(() => {
    if (jwt) {
      sessionStorage.setItem("jwt", JSON.stringify(jwt));
      getFavs({ jwt }).then(setFavs);
    } else {
      sessionStorage.removeItem("jwt");
      setFavs([]);
    }
  }, [jwt]);

  return (
    <UserContext.Provider value={{ favs, jwt, setFavs, setJwt }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
