import { css, Global } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={theme => css`
      :root {
        --primary-background-color: ${theme.colors.background.primary};
        --secondary-background-color: ${theme.colors.brand.primary};
        --primary-font-color: ${theme.colors.text.primary};
        --secondary-font-color: ${theme.colors.text.secondary};
      }

      html {
        font-size: clamp(14px, 1.2vw, 16px);
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        font-family: ${theme.typography.fontFamily.base};
        color: ${theme.colors.text.secondary};
        background-color: ${theme.colors.background.primary};

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      code,
      pre {
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
      }
    `}
  />
);

export default GlobalStyles;
