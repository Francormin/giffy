import { useContext, useEffect, useState } from "react";
import { INITIAL_PAGE } from "constants/search";
import GifsContext from "context/GifsContext";
import getGifsByKeyword from "services/getGifsByKeyword";

const useGifs = ({ keyword, rating, language } = {}) => {
  if (!keyword?.trim()) {
    throw new Error("useGifs requires a non-empty keyword");
  }

  const [isLoading, setIsLoading] = useState(false);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setIsLoading(true);

    getGifsByKeyword({
      keyword,
      rating,
      language
    })
      .then(gifs => {
        if (gifs.length === 0) {
          setIsLoading(false);
          setIsResultEmpty(true);
          return;
        }

        setGifs(gifs);
        setIsLoading(false);
        setIsResultEmpty(false);
      })
      .catch(error => {
        console.error("ERROR FETCHING GIFS", error);
        setIsLoading(false);
      });
  }, [keyword, rating, language, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setIsLoading(true);

    getGifsByKeyword({
      keyword,
      rating,
      language,
      page
    })
      .then(nextGifs => {
        if (nextGifs.length === 0) {
          setIsLoading(false);
          return;
        }

        setGifs(actualGifs => [...actualGifs, ...nextGifs]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("ERROR FETCHING PAGINATED GIFS", error);
        setIsLoading(false);
      });
  }, [keyword, rating, language, page, setGifs]);

  return {
    gifs,
    isLoading,
    isResultEmpty,
    page,
    setPage
  };
};

export default useGifs;
