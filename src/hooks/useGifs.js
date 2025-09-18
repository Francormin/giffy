import { useContext, useEffect, useState } from "react";
import getGifsByKeyword from "services/getGifsByKeyword";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

const useGifs = ({ keyword } = {}) => {
  // const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  // const [gifs, setGifs] = useState({
  //   loading: false,
  //   results: []
  // });
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);
  
  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    // setLoading(true);
    setGifs(actualGifs => ({
      loading: true,
      results: actualGifs.results
    }));

    getGifsByKeyword({ keyword: keywordToUse }).then(gifs => {
      // setGifs(gifs);
      // setLoading(false);
      setGifs({
        loading: false,
        results: gifs
      });
      localStorage.setItem("lastKeyword", keywordToUse)
    });
  }, [keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setGifs(actualGifs => ({
      loading: true,
      results: actualGifs.results
    }));

    getGifsByKeyword({ keyword: keywordToUse, page }).then(nextGifs => {
      setGifs(actualGifs => ({
        loading: false,
        results: [...actualGifs.results, ...nextGifs]
      }));
    });
  }, [page, keywordToUse, setGifs]);

  return {
    loading: gifs.loading,
    results: gifs.results,
    setPage
  };
};

export default useGifs;
