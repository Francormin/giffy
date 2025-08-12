import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

const ListOfGifs = (props) => {
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

    getGifs({ keyword })
      .then(gifs => {
        // setGifs(gifs);
        // setLoading(false);
        setGifs({
          loading: false,
          results: gifs
        });
    });
  }, [keyword]);

  if (gifs.loading) return <i>Cargando ⏳</i>

  return <>
    {
      gifs.results.map(({ id, title, url }) =>
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />
      )
    }
  </>
};

export default ListOfGifs;
