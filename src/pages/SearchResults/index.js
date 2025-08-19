import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, results } = useGifs({ keyword });

  return <ListOfGifs gifs={results} loading={loading} keyword={keyword} />;
};

export default SearchResults;
