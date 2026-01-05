import { Helmet } from "react-helmet";
import { Redirect } from "wouter";
import useSingleGif from "hooks/useSingleGif";
import GifDetails from "components/GifDetails";
import Spinner from "components/Spinner";

const Detail = ({ params }) => {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif(id);

  return isLoading ? (
    <>
      <Helmet>
        <title>Loading...</title>
        <meta name="description" content="Loading..." />
      </Helmet>
      <Spinner />
    </>
  ) : gif ? (
    <>
      <Helmet>
        <title>{gif.title} | Giffy</title>
        <meta
          name="description"
          content={`View the detail of GIF titled "${gif.title}" on Giffy.`}
        />
      </Helmet>

      <GifDetails gif={gif} />
    </>
  ) : (
    <Redirect to="/404" />
  );
};

export default Detail;
