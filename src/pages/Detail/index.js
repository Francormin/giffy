import { Redirect } from "wouter";
import GifDetails from "components/GifDetails";
import Spinner from "components/Spinner";
import useSingleGif from "hooks/useSingleGif";

const Detail = ({ params }) => {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif(id);

  return isLoading ? (
    <Spinner />
  ) : isError ? (
    <Redirect to="/404" />
  ) : gif ? (
    <GifDetails gif={gif} />
  ) : null;
};

export default Detail;
