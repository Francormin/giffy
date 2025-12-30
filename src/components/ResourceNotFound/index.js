import { useMemo } from "react";
import { Link } from "wouter";
import "./styles.css";

const ERROR_GIFS = [
  "d2jjuAZzDSVLZ5kI",
  "Bp3dFfoqpCKFyXuSzP",
  "hv5AEBpH3ZyNoRnABG",
  "hLwSzlKN8Fi6I"
];

const ResourceNotFound = () => {
  const randomGifId = useMemo(
    () => ERROR_GIFS[Math.floor(Math.random() * ERROR_GIFS.length)],
    []
  );

  const gifUrl = `https://media.giphy.com/media/${randomGifId}/giphy.gif`;

  return (
    <div className="ResourceNotFound-container">
      <span className="code-error-text">404</span>
      <span className="msg-error-text">Sometimes getting lost isn&apos;t that bad</span>
      <img className="gif-error" src={gifUrl} alt="Resource not found" />

      <Link className="link-back-home" href="/">
        Go back home
      </Link>
    </div>
  );
};

export default ResourceNotFound;
