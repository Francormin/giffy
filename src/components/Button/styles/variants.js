import { css } from "@emotion/react";

export const variants = {
  primary: {
    base: theme => css`
      background-color: ${theme.colors.brand.primary};
      color: ${theme.colors.text.secondary};
    `,
    hover: () => css`
      filter: brightness(1.1);
    `
  },

  secondary: {
    base: theme => css`
      background-color: transparent;
      color: ${theme.colors.text.primary};
      border-color: ${theme.colors.text.primary};
    `,
    hover: theme => css`
      background-color: ${theme.colors.text.primary};
      color: ${theme.colors.background.primary};
      border-color: ${theme.colors.background.primary};
    `
  },

  category: {
    base: theme => css`
      background-color: rgba(255, 255, 255, 0.08);
      color: ${theme.colors.text.primary};
      border-color: transparent;
    `,
    hover: theme => css`
      background-color: rgba(255, 255, 255, 0.15);
      color: ${theme.colors.text.primary};
      transform: translateY(-1px);
    `
  }
};
