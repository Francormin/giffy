import { useEffect, useState } from "react";
import useGlobalGifs from "./useGlobalGifs";
import getSingleGif from "services/getSingleGif";

const useSingleGif = id => {
  const { loading, results } = useGlobalGifs();
  const gifFromCache = results?.find(singleGif => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (!gif) getSingleGif(id).then(setGif);
  }, [gif, id]);

  return { loading, gif };
};

export default useSingleGif;
