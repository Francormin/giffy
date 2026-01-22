import { useEffect, useState } from "react";
import useGlobalGifs from "hooks/useGlobalGifs";
import getSingleGif from "services/getSingleGif";

const useSingleGif = id => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const { gifs } = useGlobalGifs();  
  const gifFromCache = gifs?.find(singleGif => singleGif.id === id);
  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);

      getSingleGif(id)
        .then(gifs => {
          const [singleGif] = gifs;
          setGif(singleGif || null);
          setIsLoading(false);
          setIsError(false);
        })
        .catch(({ message, status }) => {
          console.error({ message, status });
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { 
    gif,
    isLoading,
    isError
  };
};

export default useSingleGif;
