import styled from "@emotion/styled";
import Text from "components/Text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

export const ErrorCode = styled(Text)`
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;

  @media (min-width: 600px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const ErrorMessage = styled(Text)`
  margin: 1rem auto;

  @media (min-width: 600px) {
    font-size: 1.3rem;
    max-width: 70%;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    max-width: 600px;
  }
`;

export const ErrorGif = styled.img`
  margin: 1.5rem auto;
  width: 240px;
  height: 240px;
  object-fit: contain;

  @media (min-width: 600px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 380px;
    height: 380px;
  }
`;
