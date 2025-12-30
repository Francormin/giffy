import { useMemo } from "react";
import { Link } from "wouter";
import "./styles.css";

const gifsErrors = [
  "d2jjuAZzDSVLZ5kI",
  "Bp3dFfoqpCKFyXuSzP",
  "hv5AEBpH3ZyNoRnABG",
  "hLwSzlKN8Fi6I"
];

const ResourceNotFound = () => {
  const randomGifId = useMemo(
    () => gifsErrors[Math.floor(Math.random() * gifsErrors.length)],
    []
  );

  return (
    <div className="ResourceNotFound-container">
      <span className="code-error-text">404</span>
      <span className="msg-error-text">Sometimes getting lost isn&apos;t that bad</span>
      <img
        className="gif-error"
        src={`https://media.giphy.com/media/${randomGifId}/giphy.gif`}
        alt="Resource not found"
      />
      <Link className="link-back-home" href="/">
        Go back home
      </Link>
    </div>
  );
};

export default ResourceNotFound;
