import { Helmet } from "react-helmet-async";
import { Redirect } from "wouter";
import useGifs from "hooks/useGifs";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import SearchForm from "components/SearchForm";

const SearchResults = ({ params }) => {
  const { keyword, rating = "g", language = "en" } = params;

  const decodedKeyword = keyword && decodeURIComponent(keyword);

  const { gifs, isLoading, isResultEmpty, setPage } = useGifs({
    keyword: decodedKeyword,
    rating,
    language
  });

  const { externalRef } = useInfiniteScroll({
    isLoading,
    onLoadMore: () => setPage(prev => prev + 1)
  });

  if (isResultEmpty) return <Redirect to="/404" />;

  return (
    <>
      <Helmet>
        <title>{`Search results for ${decodedKeyword} | Giffy`}</title>
        <meta
          name="description"
          content={`Discover ${gifs.length} GIFs about ${decodedKeyword} on Giffy.`}
        />
      </Helmet>

      <div className="SearchResults-container">
        <SearchForm
          initialKeyword={decodedKeyword}
          initialRating={rating}
          initialLanguage={language}
        />

        <h3>results for: {decodedKeyword}</h3>

        <ListOfGifs gifs={gifs} />

        <div id="visor" ref={externalRef}></div>

        {isLoading && <Spinner />}
      </div>
    </>
  );
};

export default SearchResults;
