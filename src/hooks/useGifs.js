import { useContext, useEffect, useState } from "react";
import { INITIAL_PAGE } from "constants/search";
import GifsContext from "context/GifsContext";
import getGifsByKeyword from "services/getGifsByKeyword";

const useGifs = ({ keyword, rating, language } = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    if (!keyword && gifs?.length > 0) return;

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
  }, [keyword, keywordToUse, rating, language, gifs, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setIsLoading(true);

    getGifsByKeyword({ keyword: keywordToUse, rating, language, page })
      .then(nextGifs => {
        if (nextGifs.length === 0) {
          setIsLoading(false);
          return;
        }

        setGifs(actualGifs => [...actualGifs, ...nextGifs]);
        setIsLoading(false);
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
