import { Redirect } from "wouter";
import GifDetails from "components/GifDetails";
import Spinner from "components/Spinner";
import useSingleGif from "hooks/useSingleGif";
import useTitle from "hooks/useTitle";

const Detail = ({ params }) => {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif(id);

  const title = gif ? gif.title : "";
  useTitle(title);

  return isLoading ? (
    <Spinner />
  ) : isError ? (
    <Redirect to="/404" />
  ) : gif ? (
    <GifDetails gif={gif} />
  ) : null;
};

export default Detail;
