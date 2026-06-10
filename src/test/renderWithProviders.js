import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@emotion/react";

import { theme } from "styles";

import UserContext from "context/UserContext";
import GifsContext from "context/GifsContext";

const defaultUserContext = {
  favs: [],
  jwt: null,
  setFavs: jest.fn(),
  setJwt: jest.fn()
};

const defaultGifsContext = {
  gifs: [],
  setGifs: jest.fn(),
  isInitialized: true
};

export default function renderWithProviders(
  ui,
  { 
    userContext = defaultUserContext,
    gifsContext = defaultGifsContext
  } = {}
) {
  return render(
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={userContext}>
          <GifsContext.Provider value={gifsContext}>
            {ui}
          </GifsContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
