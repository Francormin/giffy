import Gif from "../Gif";
import ResourceNotFound from "../ResourceNotFound";
import Spinner from "../Spinner";
import "./styles.css";

const ListOfGifs = ({ gifs, loading }) => {
  return loading ? (
    <Spinner />
  ) : gifs?.length === 0 ? (
    <ResourceNotFound />
  ) : (
    <div className="ListOfGifs">
      {gifs?.map(({ id, title, url }) =>
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />
      )}
    </div>
  )
};

export default ListOfGifs;
