import { useContext, useEffect, useState } from "react";
import getGifsByKeyword from "services/getGifsByKeyword";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

const useGifs = ({ keyword } = {}) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);

    getGifsByKeyword({ keyword: keywordToUse }).then(gifs => {
      setLoading(false);
      if (gifs.length === 0) {
        setIsResultEmpty(true);
        return;
      }
      setIsResultEmpty(false);
      setGifs(gifs);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoading(true);

    getGifsByKeyword({ keyword: keywordToUse, page }).then(nextGifs => {
      setLoading(false);
      setGifs(actualGifs => [...actualGifs, ...nextGifs]);
    });
  }, [page, keywordToUse, setGifs]);

  return {
    loading,
    gifs,
    setPage,
    isResultEmpty
  };
};

export default useGifs;
