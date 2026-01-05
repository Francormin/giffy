import { useCallback, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "wouter";
import debounce from "just-debounce-it";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import SearchForm from "components/SearchForm";

const SearchResults = ({ params }) => {
  const { keyword, rating = "g", language = "en" } = params;
  const { gifs, isLoading, isResultEmpty, setPage } = useGifs({ keyword, rating, language });
  const externalRef = useRef();

  const { show } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 500),
    [setPage]
  );

  useEffect(() => {
    if (show) debounceHandleNextPage();
  }, [show, debounceHandleNextPage]);

  return !isResultEmpty ? (
    <>
      <Helmet>
        <title>{`Search results for ${decodeURIComponent(keyword)} | Giffy`}</title>
        <meta
          name="description"
          content={`Discover ${gifs.length} GIFs about ${decodeURIComponent(keyword)} on Giffy.`}
        />
      </Helmet>

      <div className="SearchResults-container">
        <SearchForm
          initialKeyword={keyword}
          initialRating={rating}
          initialLanguage={language}
        />

        <h5>results for: {decodeURIComponent(keyword)}</h5>

        <ListOfGifs gifs={gifs} />

        <div id="visor" ref={externalRef}></div>

        {isLoading && <Spinner />}
      </div>
    </>
  ) : (
    <Redirect to="/404" />
  );
};

export default SearchResults;
