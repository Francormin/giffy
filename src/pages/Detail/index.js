import GifDetails from "components/GifDetails";
import Spinner from "components/Spinner";
import useSingleGif from "hooks/useSingleGif";

const Detail = ({ params }) => {
  const { id } = params;
  const { loading, gif } = useSingleGif(id);

  return loading ? <Spinner /> : <GifDetails gif={gif} />;
};

export default Detail;
