import "./Gif.css";

const Gif = ({ id, title, url }) => {
  return (
    <a href={`/gif/${id}`} className="Gif">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </a>
  );
};

export default Gif;
