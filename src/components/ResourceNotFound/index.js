import { useMemo } from "react";
import Button from "components/Button";
import { Container, ErrorCode, ErrorGif, ErrorMessage } from "./styles";

const ERROR_GIFS = [
  "d2jjuAZzDSVLZ5kI",
  "Bp3dFfoqpCKFyXuSzP",
  "hv5AEBpH3ZyNoRnABG",
  "hLwSzlKN8Fi6I"
];

const ResourceNotFound = () => {
  const randomGifId = useMemo(() => ERROR_GIFS[Math.floor(Math.random() * ERROR_GIFS.length)], []);

  const gifUrl = `https://media.giphy.com/media/${randomGifId}/giphy.gif`;

  return (
    <Container>
      <ErrorCode as="span" variant="heading">
        404
      </ErrorCode>

      <ErrorMessage>
        Sometimes getting lost isn&apos;t that bad
      </ErrorMessage>

      <ErrorGif src={gifUrl} alt="Resource not found" />

      <Button variant="primary" href="/">
        Go back home
      </Button>
    </Container>
  );
};

export default ResourceNotFound;
