import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  from {
    opacity: 0.3;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const LoaderContainer = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: 50%;
  animation: ${pulse} 0.6s infinite alternate;

  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.4s;
  }
`;
