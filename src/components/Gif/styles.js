import styled from "@emotion/styled";
import { Link } from "wouter";

export const GifCard = styled.div`
  height: 100%;
  position: relative;
  transition: transform 0.15s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const GifButtons = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
`;

export const GifLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.secondary};
  display: block;
  position: relative;
  width: 100%;
  height: 100%;

  @media (hover: hover) {
    &:hover h5 {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const GifTitle = styled.h5`
  background: ${({ theme }) => theme.colors.background.primary};
  position: absolute;
  bottom: 0;
  margin: 0;
  opacity: 1;
  transform: none;

  @media (hover: hover) {
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.15s ease, transform 0.15s ease;
  }
`;

export const GifImage = styled.img`
  width: 100%;
  height: inherit;
  object-fit: cover;
  vertical-align: top;
  border-radius: 3px;
`;
