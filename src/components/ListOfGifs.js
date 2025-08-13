import { useEffect, useState } from "react";
import getGifsByKeyword from "../services/getGifsByKeyword";
import Gif from "./Gif";

const ListOfGifs = props => {
  const { keyword } = props.params;
  // const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  const [gifs, setGifs] = useState({
    loading: false,
    results: []
  });

  useEffect(() => {
    // setLoading(true);
    setGifs(actualGifs => ({
      loading: true,
      results: actualGifs.results
    }));

    getGifsByKeyword({ keyword }).then(gifs => {
      // setGifs(gifs);
      // setLoading(false);
      setGifs({
        loading: false,
        results: gifs
      });
    });
  }, [keyword]);

  return gifs.loading ? (
    <i>Loading... ⏳</i>
  ) : gifs.results.length === 0 ? (
    <p>No GIFs found 😢</p>
  ) : (
    gifs.results.map(({ id, title, url }) => 
      <Gif
        key={id}
        id={id}
        title={title}
        url={url}
      />
    )
  );
};

export default ListOfGifs;
