import React from "react";
import { Link } from "wouter";
import Fav from "components/Fav";
import "./styles.css";

const Gif = ({ id, title, url }) => {
  return (
    <div className="Gif-card">
      <div className="Gif-buttons">
        <Fav id={id} />
      </div>

      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} alt={title} loading="lazy" />
      </Link>
    </div>
  );
};

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
