import { css } from "@emotion/react";

// Button shared styles

export const buttonBase = theme => css`
  border: 1px solid transparent;
  border-radius: ${theme.components.button.radius};
  cursor: pointer;

  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease,
    transform 0.2s ease;
`;

export const buttonDisabled = css`
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
  transform: none;
`;

export const buttonFocus = theme => css`
  outline: none;
  box-shadow: 0 0 0 ${theme.components.button.focusRingWidth} currentColor;
`;
