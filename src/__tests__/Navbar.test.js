import { screen } from "@testing-library/react";
import renderWithProviders from "test/renderWithProviders";
import Navbar from "components/Navbar";

beforeEach(() => {
  renderWithProviders(<Navbar />)
});

describe("Navbar component", () => {
  test("renders two navigation links", () => {
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  test("renders login link", () => {
    expect(
      screen.getByRole("link", {
        name: /login/i
      })
    ).toBeInTheDocument();
  });

  test("login link points to login page", () => {
    expect(
      screen.getByRole("link", {
        name: /login/i
      })
    ).toHaveAttribute("href", "/login");
  });

  test("renders register link", () => {
    expect(
      screen.getByRole("link", {
        name: /register/i
      })
    ).toBeInTheDocument();
  });

  test("register link points to register page", () => {
    expect(
      screen.getByRole("link", {
        name: /register/i
      })
    ).toHaveAttribute("href", "/register");
  });
});
