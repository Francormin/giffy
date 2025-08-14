import { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

const TRENDING_GIFS = ["Brasil", "Colombia", "Argentina"];

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
        <input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleChange}
        />
      </form>

      <h3>Last search</h3>
      <ListOfGifs gifs={results} loading={loading} />

      <h3>Trending gifs</h3>
      <ul>
        {TRENDING_GIFS.map(trendingGif =>
          <li key={trendingGif}>
            <Link to={`/search/${trendingGif}`}>GIFS of {trendingGif}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Home;
