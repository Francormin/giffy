import "./styles.css";

const GifDetails = ({ gif }) => {
  const { title, url, username, rating, description, type } = gif;

  return (
    <section className="GifDetails">
      <div className="GifDetails-media">
        <img src={url} alt={title || "GIF detail"} />
      </div>

      <div className="GifDetails-info">
        <h1 className="GifDetails-title">
          {title || "Untitled GIF"}
        </h1>

        <div className="GifDetails-meta">
          <span className="badge">{type}</span>
          <span className="badge">⭐ {rating}</span>
        </div>

        <p className="GifDetails-description">
          {description || "No description provided."}
        </p>

        <p className="GifDetails-user">
          Uploaded by <strong>{username || "Anonymous"}</strong>
        </p>
      </div>
    </section>
  );
};

export default GifDetails;
