import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@emotion/react";
import { theme } from "styles";

export const renderWithProviders = ui =>
  render(
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        {ui}
      </ThemeProvider>
    </HelmetProvider>
  );
