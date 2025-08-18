import { useContext, useEffect } from "react";
import getGifsByKeyword from "../services/getGifsByKeyword";
import GifsContext from "../context/GifsContext";

const useGifs = ({ keyword } = {}) => {
  // const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  // const [gifs, setGifs] = useState({
  //   loading: false,
  //   results: []
  // });
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    // setLoading(true);
    setGifs(actualGifs => ({
      loading: true,
      results: actualGifs.results
    }));

    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";

    getGifsByKeyword({ keyword: keywordToUse }).then(gifs => {
      // setGifs(gifs);
      // setLoading(false);
      setGifs({
        loading: false,
        results: gifs
      });
      localStorage.setItem("lastKeyword", keywordToUse)
    });
  }, [keyword, setGifs]);

  return gifs;
};

export default useGifs;
