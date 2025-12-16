import { useContext, useEffect, useState } from "react";
import GifsContext from "context/GifsContext";
import getGifsByKeyword from "services/getGifsByKeyword";

const INITIAL_PAGE = 0;

const useGifs = ({ keyword } = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setIsLoading(true);

    getGifsByKeyword({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keywordToUse);
      });
  }, [keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setIsLoading(true);

    getGifsByKeyword({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(actualGifs => [...actualGifs, ...nextGifs]);
        setIsLoading(false);
      });
  }, [page, keywordToUse, setGifs]);

  return {
    gifs,
    isLoading,
    setPage
  };
};

export default useGifs;
