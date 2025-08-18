import { useEffect, useState } from "react";
import getGifById from "../services/getGifById";

const useGif = id => {
  const [gif, setGif] = useState({
    loading: false,
    result: {}
  });

  useEffect(() => {
    // setLoading(true);
    setGif(actualGif => ({
      loading: true,
      result: actualGif.result
    }));

    getGifById({ id }).then(gif => {
      // setGifs(gifs);
      // setLoading(false);
      setGif({
        loading: false,
        result: gif
      });
    });
  }, [id]);

  return gif;
};

export default useGif;
