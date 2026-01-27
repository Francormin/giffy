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
  }
};
