import { screen } from "@testing-library/dom";
import renderWithProviders from "test/renderWithProviders";
import SearchResults from "pages/SearchResults";

beforeEach(() => {
  renderWithProviders(
    <SearchResults
      params={{
        keyword: "Batman",
        rating: "g",
        language: "en"
      }}
    />
  );
});

describe("SearchResults page", () => {
  test("renders search results heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /results for: batman/i
      })
    ).toBeInTheDocument();
  });

  test("renders gifs returned by hook", () => {
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
});
