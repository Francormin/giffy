import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const logoPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
`;

export const AppContent = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AppLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 240px;
  cursor: pointer;

  transition:
    filter 0.25s ease,
    transform 0.15s ease;

  ${({ pulse }) =>
    pulse &&
    css`
      animation: ${logoPulse} 2s infinite ease-in-out;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}

  &:hover,
  &:focus-visible {
    filter:
      drop-shadow(0 8px 16px rgba(0, 91, 176, 0.35))
      saturate(1.1)
      brightness(1.05);
  }

  &:active {
    filter: brightness(0.95);
  }
`;
