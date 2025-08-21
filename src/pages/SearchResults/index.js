import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, results } = useGifs({ keyword });

  return (
    <div className="SearchResults-container">
      <h5>
        <u>results for:</u> {keyword}
      </h5>
      <ListOfGifs gifs={results} loading={loading} />
    </div>
  );
};

export default SearchResults;
