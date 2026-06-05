import { screen } from "@testing-library/react";
import renderWithProviders from "test/renderWithProviders";
import App from "App";

beforeEach(() => renderWithProviders(<App />));

describe("App", () => {
  test("renders without crashing", async () => {
    expect(
      await screen.findByRole("heading", {
        name: /last search/i
      })
    ).toBeInTheDocument();
  });

  test("renders login link", () => {
    expect(
      screen.getByRole("link", {
        name: /login/i
      })
    ).toBeInTheDocument();
  });

  test("renders register link", () => {
    expect(
      screen.getByRole("link", {
        name: /register/i
      })
    ).toBeInTheDocument();
  });

  test("login link points to login page", () => {
    const link = screen.getByRole("link", {
      name: /login/i
    });

    expect(link).toHaveAttribute("href", "/login");
  });

  test("register link points to register page", () => {
    const link = screen.getByRole("link", {
      name: /register/i
    });

    expect(link).toHaveAttribute("href", "/register");
  });
});
