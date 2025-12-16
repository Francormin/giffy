import Gif from "components/Gif";
import "./styles.css";

const ListOfGifs = ({ gifs }) => (
  <div className="ListOfGifs-grid">
    {gifs?.map(({ id, title, url, ...restOfGif }) => (
      <Gif
        key={id}
        id={id}
        title={title}
        url={url}
        extraInfo={restOfGif}
      />
    ))}
  </div>
);

export default ListOfGifs;
