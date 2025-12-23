import { useContext, useEffect, useState } from "react";
import GifsContext from "context/GifsContext";
import getGifsByKeyword from "services/getGifsByKeyword";

const INITIAL_PAGE = 0;

const useGifs = ({ keyword, rating, language } = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setIsLoading(true);

    getGifsByKeyword({ keyword: keywordToUse, rating, language })
      .then(gifs => {
        if (gifs.length === 0) {
          setIsLoading(false);
          setIsResultEmpty(true);
          return;
        }
        setGifs(gifs);
        setIsLoading(false);
        setIsResultEmpty(false);
        localStorage.setItem("lastKeyword", keywordToUse);
      });
  }, [keywordToUse, rating, language, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setIsLoading(true);

    getGifsByKeyword({ keyword: keywordToUse, rating, language, page })
      .then(nextGifs => {
        if (nextGifs.length === 0) {
          setIsLoading(false);
          setIsResultEmpty(true);
          return;
        }
        setGifs(actualGifs => [...actualGifs, ...nextGifs]);
        setIsLoading(false);
        setIsResultEmpty(false);
      });
  }, [keywordToUse, rating, language, page, setGifs]);

  return {
    gifs,
    isLoading,
    isResultEmpty,
    setPage
  };
};

export default useGifs;
