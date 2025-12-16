import { Redirect } from "wouter";
import GifDetails from "components/GifDetails";
import Spinner from "components/Spinner";
import useSingleGif from "hooks/useSingleGif";
import useSEO from "hooks/useSEO";

const Detail = ({ params }) => {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif(id);

  const title = gif ? gif.title : "";
  const description = gif ? `View the detail of GIF titled "${gif.title}" on Giffy.` : "";
  useSEO({ title, description });

  return isLoading ? (
    <Spinner />
  ) : isError ? (
    <Redirect to="/404" />
  ) : gif ? (
    <GifDetails gif={gif} />
  ) : null;
};

export default Detail;
