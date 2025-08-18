import GifDetails from "../../components/GifDetails";
import useGlobalGifs from "../../hooks/useGlobalGifs";

const Detail = ({ params }) => {
  const { id } = params;
  const { loading, results } = useGlobalGifs();

  const gif = results?.find(singleGif => singleGif.id === id);

  return <GifDetails gif={gif} loading={loading} />;
};

export default Detail;
