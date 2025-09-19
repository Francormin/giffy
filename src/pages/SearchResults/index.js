import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, results, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 500),
    [setPage]
  );

  useEffect(() => {
    if (show) debounceHandleNextPage();
  }, [show, debounceHandleNextPage]);

  return (
    <div className="SearchResults-container">
      <h5>results for: {keyword}</h5>
      <ListOfGifs gifs={results} />
      <div id="visor" ref={externalRef}></div>
      {loading && <Spinner />}
    </div>
  );
};

export default SearchResults;
