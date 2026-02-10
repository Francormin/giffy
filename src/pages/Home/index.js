import { Helmet } from "react-helmet-async";
import useGlobalGifs from "hooks/useGlobalGifs";
import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import Text from "components/Text";
import PageContainer from "components/Layout/PageContainer";

const Home = () => {
  useGifs();

  const { gifs } = useGlobalGifs();
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

        <Text as="h2" variant="heading">
          Last search
        </Text>

        <ListOfGifs gifs={first15Gifs} />

        <TrendingSearches />
      </PageContainer>
    </>
  );
};

export default Home;
