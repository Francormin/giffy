import { screen } from "@testing-library/react";
import renderWithProviders from "test/renderWithProviders";
import NotFound from "pages/NotFound";

beforeEach(() => {
  renderWithProviders(<NotFound />);
});

describe("NotFound page", () => {
  test("renders 404 error code", () => {
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  test("renders not found image", () => {
    expect(
      screen.getByRole("img", {
        name: /resource not found/i
      })
    ).toBeInTheDocument();
  });

  test("renders back home link", () => {
    expect(
      screen.getByRole("link", {
        name: /go back home/i
      })
    ).toHaveAttribute("href", "/");
  });
});
