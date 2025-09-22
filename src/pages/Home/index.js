import { useCallback } from "react";
import { useLocation } from "wouter";
import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

const Home = () => {
  const [path, pushLocation] = useLocation();
  const { results } = useGifs();

  const handleSubmit = useCallback((({ keyword }) => {
    pushLocation(`/search/${keyword}`);
  }), [pushLocation]);

  return (
    <div className="Home-container">
      <SearchForm onSubmit={handleSubmit} />

      <h3>Last search</h3>
      <ListOfGifs gifs={results} />

      <TrendingSearches />
    </div>
  );
};

export default Home;
