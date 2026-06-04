import { useEffect, useState } from "react";
import useGlobalGifs from "hooks/useGlobalGifs";
import getSingleGif from "services/getSingleGif";

const useSingleGif = id => {
  const [gif, setGif] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  
  const { gifs } = useGlobalGifs();  
  const gifFromCache = gifs?.find(singleGif => singleGif.id === id);

  useEffect(() => {
    if (gifFromCache) {
      setGif(gifFromCache);
      setIsLoading(false);
      return;
    }

    getSingleGif(id)
      .then(gifs => {
        const [singleGif] = gifs;
        setGif(singleGif || null);
        setIsLoading(false);
      })
      .catch(({ message, status }) => {
        console.error({ message, status });
        setGif(null);
        setIsLoading(false);
      });
  }, [gifFromCache, id]);

  return { 
    gif,
    isLoading
  };
};

export default useSingleGif;
