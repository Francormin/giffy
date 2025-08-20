import { useState } from "react";
import { useLocation } from "wouter";
import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, results } = useGifs();

  const handleSubmit = event => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  return (
    <div className="Home-container">
      <form onSubmit={handleSubmit}>
        <button onClick={handleSubmit} disabled={!keyword.length}>
          Search
        </button>
        <input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleChange}
        />
      </form>

      <h3>Last search</h3>
      <ListOfGifs gifs={results} loading={loading} />

      <TrendingSearches />
    </div>
  );
};

export default Home;
