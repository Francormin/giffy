import Gif from "components/Gif";
import { Grid } from "./styles";

const ListOfGifs = ({ gifs }) => (
  <Grid>
    {gifs?.map(({ id, title, url, ...restOfGif }) => (
      <Gif
        key={url}
        id={id}
        title={title}
        url={url}
        extraInfo={restOfGif}
      />
    ))}
  </Grid>
);

export default ListOfGifs;
