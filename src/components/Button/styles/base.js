import { css } from "@emotion/react";

export const buttonBase = theme => css`
  border: 1px solid transparent;
  border-radius: ${theme.components.button.radius};
  cursor: pointer;
  font-family: ${theme.typography.fontFamily.base};
  font-weight: ${theme.typography.fontWeight.medium};

  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;
`;

export const buttonDisabled = css`
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
`;

export const buttonFocus = theme => css`
  outline: none;
  box-shadow: 0 0 0 ${theme.components.button.focusRingWidth} currentColor;
`;
