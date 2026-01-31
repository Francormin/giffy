import styled from "@emotion/styled";

export const FavButton = styled.button`
  background-color: #ffcc00;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 0.75rem;
  padding: 10px;

  transition: background-color 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background-color: #ff9900;
    }
  }
`;
