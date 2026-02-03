import React from "react";
import Fav from "components/Fav";
import { GifButtons, GifCard, GifImage, GifLink, GifTitle } from "./styles";

const Gif = ({ id, title, url }) => {
  return (
    <GifCard>
      <GifButtons>
        <Fav id={id} />
      </GifButtons>

      <GifLink to={`/gif/${id}`}>
        <GifTitle>{title}</GifTitle>
        <GifImage src={url} alt={title} loading="lazy" />
      </GifLink>
    </GifCard>
  );
};

export default React.memo(Gif);
