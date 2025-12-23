import { Helmet } from "react-helmet";
import useGlobalGifs from "hooks/useGlobalGifs";
import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

const Home = () => {
  useGifs();

  const { gifs } = useGlobalGifs();
  const first15Gifs = gifs?.slice(0, 15);

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
        <meta name="description" content="Giffy is a platform for discovering and sharing GIFs." />
      </Helmet>
      <div className="Home-container">
        <SearchForm />

        <h3>Last search</h3>
        <ListOfGifs gifs={first15Gifs} />

        <TrendingSearches />
      </div>
    </>
  );
};

export default Home;
