import Gif from "components/Gif";
import ResourceNotFound from "components/ResourceNotFound";
import "./styles.css";

const ListOfGifs = ({ gifs }) => {
  return gifs?.length === 0 ? (
    <ResourceNotFound />
  ) : (
    <div className="ListOfGifs-container">
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
    </div>
  );
};

export default ListOfGifs;
