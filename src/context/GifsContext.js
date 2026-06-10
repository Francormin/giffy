import { createContext, useEffect, useState } from "react";
import getGifsByKeyword from "services/getGifsByKeyword";

const GifsContext = createContext();

export const GifsContextProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const [gifs, setGifs] = useState(() => {
    const localData = localStorage.getItem("gifs");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    if (gifs.length > 0) {
      setIsInitialized(true);
      return;
    };

    getGifsByKeyword({ keyword: "random" })
      .then(setGifs)
      .catch(error => console.error("ERROR FETCHING RANDOM GIFS", error))
      .finally(() => setIsInitialized(true));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("gifs", JSON.stringify(gifs));
  }, [gifs]);

  return (
    <GifsContext.Provider value={{ gifs, setGifs, isInitialized }}>
      {children}
    </GifsContext.Provider>
  );
};

export default GifsContext;
