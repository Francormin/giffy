import "./styles.css";

const GifDetails = ({ gif }) => (
  <div className="GifDetails-container">
    <div className="GifDetails-card">
      <img src={gif.url} alt="url" />
      <h3>Title: {gif.title}</h3>
      <span>Type: {gif.type}</span>
      <span>Description: {gif.description || "no description specified"}</span>
      <span>Rating: {gif.rating}</span>
      <span>Username: {gif.username || "no username specified"}</span>
    </div>
  </div>
);

export default GifDetails;
