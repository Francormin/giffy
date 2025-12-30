import "./styles.css";

const gifsErrors = [
  "d2jjuAZzDSVLZ5kI",
  "Bp3dFfoqpCKFyXuSzP",
  "hv5AEBpH3ZyNoRnABG",
  "hLwSzlKN8Fi6I"
];

const ResourceNotFound = () => {
  const randomImage = () =>
    `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`;

  return (
    <div className="ResourceNotFound-container">
      <span className="code-error-text">404</span>
      <span className="msg-error-text">Sometimes getting lost isn&apos;t that bad</span>
      <img className="gif-error" src={randomImage()} alt="Resource Not Found" />
      <a className="link-back-home" href="/">Go back home</a>
    </div>
  );
};

export default ResourceNotFound;
