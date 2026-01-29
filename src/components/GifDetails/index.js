import Text from "components/Text";
import "./styles.css";

const GifDetails = ({ gif }) => {
  const { title, url, username, rating, description, type } = gif;

  return (
    <section className="GifDetails">
      <div className="GifDetails-media">
        <img src={url} alt={title || "GIF detail"} />
      </div>

      <div className="GifDetails-info">
        <Text as="h1" variant="heading">
          {title || "Untitled GIF"}
        </Text>

        <div className="GifDetails-meta">
          <Text as="span" className="badge">
            {type}
          </Text>
          <Text as="span" className="badge">
            ⭐ {rating}
          </Text>
        </div>

        <Text>{description || "No description provided."}</Text>

        <Text variant="caption" style={{ opacity: 0.7 }}>
          Uploaded by <strong>{username || "Anonymous"}</strong>
        </Text>
      </div>
    </section>
  );
};

export default GifDetails;
