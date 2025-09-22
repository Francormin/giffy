import Gif from "components/Gif";
import ResourceNotFound from "components/ResourceNotFound";
import "./styles.css";

const ListOfGifs = ({ gifs }) => {
  return gifs?.length === 0 ? (
    <ResourceNotFound />
  ) : (
    <div className="ListOfGifs-container">
      <div className="ListOfGifs-grid">
        {gifs?.map(({ id, title, url, ...restOfGif }) =>
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
            extraInfo={restOfGif}
          />
        )}
      </div>
    </div>
  );
};

export default ListOfGifs;
