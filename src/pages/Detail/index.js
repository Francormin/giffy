import useGlobalGifs from "hooks/useGlobalGifs";
import GifDetails from "components/GifDetails";
import Spinner from "components/Spinner";

const Detail = ({ params }) => {
  const { id } = params;
  const { loading, results } = useGlobalGifs();

  const gif = results?.find(singleGif => singleGif.id === id);

  return loading ? <Spinner /> : <GifDetails gif={gif} />;
};

export default Detail;
