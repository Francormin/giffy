import { useEffect, useState } from "react";
import getGifById from "../services/getGifById";

const GifDetails = props => {
  const { id } = props.params;

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

  const hasData = gif.result && Object.keys(gif.result).length > 0;

  return gif.loading ? (
    <i>Loading... ⏳</i>
  ) : !hasData ? (
    <p>No GIF found 😢</p>
  ) : (
    <>
      <img src={gif.result?.url} alt="url" />
      <h3>Title: {gif.result?.title}</h3>
      <span>Type: {gif.result?.type}</span>
      <span>Description: {gif.result?.description || "no description specified"}</span>
      <span>Rating: {gif.result?.rating}</span>
      <span>Username: {gif.result?.username || "no username specified"}</span>
    </>
  );
};

export default GifDetails;
