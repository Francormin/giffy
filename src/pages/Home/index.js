import { useCallback } from "react";
import { useLocation } from "wouter";
import useGlobalGifs from "hooks/useGlobalGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

const Home = () => {
  const [path, pushLocation] = useLocation();
  const { gifs } = useGlobalGifs();

  const first15Gifs = gifs?.slice(0, 15);

  const handleSubmit = useCallback((({ keyword }) => {
    pushLocation(`/search/${keyword}`);
  }), [pushLocation]);

  return (
    <div className="Home-container">
      <SearchForm onSubmit={handleSubmit} />

      <h3>Last search</h3>
      <ListOfGifs gifs={first15Gifs} />

      <TrendingSearches />
    </div>
  );
};

export default Home;
