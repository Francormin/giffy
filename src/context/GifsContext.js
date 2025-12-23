import { createContext, useEffect, useState } from "react";

const GifsContext = createContext();

export const GifsContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState(() => {
    // Inicializa desde localStorage
    const localData = localStorage.getItem("gifs");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    // Actualiza localStorage cada vez que cambian los gifs
    localStorage.setItem("gifs", JSON.stringify(gifs));
  }, [gifs]);

  return (
    <GifsContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifsContext.Provider>
  );
};

export default GifsContext;
