import { screen } from "@testing-library/react";
import renderWithProviders from "test/renderWithProviders";
import App from "App";

describe("App", () => {
  test("renders home page on initial route", async () => {
    renderWithProviders(<App />);

    expect(
      await screen.findByRole("heading", {
        name: /last search/i
      })
    ).toBeInTheDocument();
  });
});
