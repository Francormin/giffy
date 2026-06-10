import { Helmet } from "react-helmet-async";
import useGlobalGifs from "hooks/useGlobalGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import Text from "components/Text";
import PageContainer from "components/Layout/PageContainer";
import Spinner from "components/Spinner";

const Home = () => {
  const { gifs, isInitialized } = useGlobalGifs();
  const first15Gifs = gifs?.slice(0, 15);

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
        <meta
          name="description"
          content="Giffy is a platform for discovering and sharing GIFs."
        />
      </Helmet>

      <PageContainer>
        <SearchForm />

        {!isInitialized ? (
          <Spinner />
        ) : (
          <>
            <Text as="h2" variant="heading">
              Last search
            </Text>
    
            <ListOfGifs gifs={first15Gifs} />
          </>
        )}

        <TrendingSearches />
      </PageContainer>
    </>
  );
};

export default Home;
