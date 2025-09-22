import React from "react";
import { Link } from "wouter";
import "./styles.css";

const Gif = ({ id, title, url }) => {
  return (
    <div className="Gif-card">
      <Link href={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} alt={title} loading="lazy" />
      </Link>
    </div>
  );
};

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
