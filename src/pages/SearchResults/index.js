import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, results, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage(prevPage => prevPage + 1);

  return (
    <div className="SearchResults-container">
      <h5>
        <u>results for:</u> {keyword}
      </h5>
      <ListOfGifs gifs={results} loading={loading} />
      <button onClick={handleNextPage}>
        Get next page
      </button>
    </div>
  );
};

export default SearchResults;
