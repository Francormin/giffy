import Gif from "../Gif";
import ResourceNotFound from "../ResourceNotFound";
import Spinner from "../Spinner";
import "./styles.css";

const ListOfGifs = ({ gifs, loading, keyword }) => {
  return loading ? (
    <Spinner />
  ) : gifs?.length === 0 ? (
    <ResourceNotFound />
  ) : (
    <div className="ListOfGifs-container">
      <h5><u>results for:</u> {keyword}</h5>
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
  )
};

export default ListOfGifs;
