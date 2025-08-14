import { useEffect, useState } from "react";
import getGifById from "../../services/getGifById";
import GifDetails from "../../components/GifDetails";
import Spinner from "../../components/Spinner";

const Detail = ({ params }) => {
  const { id } = params;
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

  return gif.loading
    ? <Spinner />
    : <GifDetails gif={gif.result} />;
};

export default Detail;
