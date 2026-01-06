import { Helmet } from "react-helmet-async";
import { Redirect } from "wouter";
import useSingleGif from "hooks/useSingleGif";
import GifDetails from "components/GifDetails";
import Spinner from "components/Spinner";

const Detail = ({ params }) => {
  const { id } = params;
  const { gif, isLoading } = useSingleGif(id);

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
          <meta name="description" content="Loading..." />
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (!gif) return <Redirect to="/404" />;

  return (
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
  );
};

export default Detail;
