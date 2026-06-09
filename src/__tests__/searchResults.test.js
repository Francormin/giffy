import { screen } from "@testing-library/react";

import { gifs } from "test/fixtures/gifs";
import { mockUseGifs } from "test/mocks/useGifs";
import "test/mocks/wouter";
import renderWithProviders from "test/renderWithProviders";

import SearchResults from "pages/SearchResults";

const defaultParams = {
  keyword: "Batman",
  rating: "g",
  language: "en"
};

const renderSearchResults = (params = defaultParams) => {
  return renderWithProviders(
    <SearchResults params={params} />
  );
};

const createUseGifsMock = (overrides = {}) => ({
  gifs: gifs,
  isLoading: false,
  isResultEmpty: false,
  page: 0,
  setPage: jest.fn(),
  ...overrides
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("SearchResults page", () => {
  test("renders search results heading", () => {
    mockUseGifs.mockReturnValue(
      createUseGifsMock()
    );

    renderSearchResults();

    expect(
      screen.getByRole("heading", {
        name: `results for: ${defaultParams.keyword}`
      })
    ).toBeInTheDocument();
  });

  test("renders gifs returned by useGifs", () => {
    mockUseGifs.mockReturnValue(
      createUseGifsMock()
    );

    renderSearchResults();

    expect(
      screen.getByRole("img", {
        name: /funny cat/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", {
        name: /dancing dog/i
      })
    ).toBeInTheDocument();
  });

  test("renders one image per gif", () => {
    mockUseGifs.mockReturnValue(
      createUseGifsMock()
    );

    renderSearchResults();

    expect(screen.getAllByAltText(/.+/)).toHaveLength(gifs.length);
  });

  test("renders spinner while loading gifs", () => {
    mockUseGifs.mockReturnValue(
      createUseGifsMock({
        gifs: [],
        isLoading: true
      })
    );

    renderSearchResults();

    expect(
      screen.getByRole("status", {
        name: /loading/i
      })
    ).toBeInTheDocument();
  });

  test("redirects to 404 when no gifs are found", () => {
    mockUseGifs.mockReturnValue(
      createUseGifsMock({
        isResultEmpty: true
      })
    );

    renderSearchResults();

    expect(screen.getByTestId("redirect")).toHaveTextContent("/404");
  });
});
