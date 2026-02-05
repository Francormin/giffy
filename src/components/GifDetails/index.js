import Text from "components/Text";
import { Badge, Container, Info, Media, Meta } from "./styles";

const GifDetails = ({ gif }) => {
  const { title, url, username, rating, description, type } = gif;

  return (
    <Container>
      <Media>
        <img src={url} alt={title || "GIF detail"} />
      </Media>

      <Info>
        <Text as="h1" variant="heading">
          {title || "Untitled GIF"}
        </Text>

        <Meta>
          <Badge>{type}</Badge>
          <Badge>⭐ {rating}</Badge>
        </Meta>

        <Text>
          {description || "No description provided."}
        </Text>

        <Text variant="caption" style={{ opacity: 0.7 }}>
          Uploaded by <strong>{username || "Anonymous"}</strong>
        </Text>
      </Info>
    </Container>
  );
};

export default GifDetails;
