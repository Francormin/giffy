import { Helmet } from "react-helmet-async";
import useFavGifs from "hooks/useFavGifs";
import PageContainer from "components/Layout/PageContainer";
import ListOfGifs from "components/ListOfGifs";

const FavsPage = () => {
  const { favGifs, error } = useFavGifs();

  return (
    <>
      <Helmet>
        <title>My Favorites | Giffy</title>
        <meta
          name="description"
          content="Discover your favorite GIFs on Giffy. View and manage your collection of saved GIFs in one place."
        />
      </Helmet>

      <PageContainer>
        <h1>My Favorites</h1>

        {error && <p>{error.message}</p>}

        {!error && favGifs?.length === 0 ? (
          <p>You have no favorite GIFs yet.</p>
        ) : (
          <ListOfGifs gifs={favGifs} />
        )}
      </PageContainer>
    </>
  );
};

export default FavsPage;
