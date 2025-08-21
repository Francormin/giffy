import Gif from "components/Gif";
import ResourceNotFound from "components/ResourceNotFound";
import Spinner from "components/Spinner";
import "./styles.css";

const ListOfGifs = ({ gifs, loading }) => {
  return (
    <div className="ListOfGifs-container">
      {
        loading ? (
          <Spinner />
        ) : gifs?.length === 0 ? (
          <ResourceNotFound />
        ) : (
          <div className="ListOfGifs-grid">
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
      }
    </div>
  );
};

export default ListOfGifs;
