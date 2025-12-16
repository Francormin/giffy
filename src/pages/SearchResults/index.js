import { useCallback, useEffect, useRef } from "react";
import { Redirect } from "wouter";
import debounce from "just-debounce-it";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import useTitle from "hooks/useTitle";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage, isResultEmpty } = useGifs({ keyword });
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

  const title = gifs.length? `Search results for ${decodeURIComponent(keyword)}` : "";
  useTitle(title);

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 500),
    [setPage]
  );

  useEffect(() => {
    if (show) debounceHandleNextPage();
  }, [show, debounceHandleNextPage]);

  return isResultEmpty ? (
    <Redirect to="/404" />
  ) : (
    <div className="SearchResults-container">
      <h5>results for: {decodeURIComponent(keyword)}</h5>
      <ListOfGifs gifs={gifs} />
      <div id="visor" ref={externalRef}></div>
      {loading && <Spinner />}
    </div>
  );
};

export default SearchResults;
