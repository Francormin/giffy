import { fireEvent, screen } from "@testing-library/react";
import { mockGifs } from "test/mocks";
import { renderWithProviders } from "test/renderWithProviders";
import App from "./App";

beforeEach(() => {
  localStorage.setItem("gifs", JSON.stringify(mockGifs));
});

afterEach(() => {
  localStorage.clear();
});

describe("Home page", () => {
  // RENDERIZADO
  test("renders gifs stored in global state", async () => {
    renderWithProviders(<App />);

    expect(
      await screen.findByRole("img", {
        name: /funny cat/i
      })
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("img", {
        name: /dancing dog/i
      })
    ).toBeInTheDocument();
  });

  test("renders last search heading", () => {
    renderWithProviders(<App />);

    expect(
      screen.getByRole("heading", {
        name: /last search/i
      })
    ).toBeInTheDocument();
  });

  test("renders login link", () => {
    renderWithProviders(<App />);

    expect(
      screen.getByRole("link", {
        name: /login/i
      })
    ).toBeInTheDocument();
  });

  test("renders register link", () => {
    renderWithProviders(<App />);

    expect(
      screen.getByRole("link", {
        name: /register/i
      })
    ).toBeInTheDocument();
  });

  // INTERACCIÓN
  test("search button is initially disabled and becomes enabled when input has text", () => {
    renderWithProviders(<App />);

    const input = screen.getByRole("textbox");

    const button = screen.getByRole("button", {
      name: /search/i
    });

    expect(button).toBeDisabled();

    fireEvent.change(input, {
      target: { value: "Matrix" }
    });

    expect(button).toBeEnabled();
  });

  test("search form could be used", async () => {
    renderWithProviders(<App />);

    const input = screen.getByRole("textbox");

    const button = screen.getByRole("button", {
      name: /search/i
    });

    fireEvent.change(input, {
      target: { value: "Batman" }
    });

    fireEvent.click(button);

    expect(
      await screen.findByText("results for: Batman")
    ).toBeVisible();
  });

  // NAVEGACIÓN
  test("login link points to login page", () => {
    renderWithProviders(<App />);

    const link = screen.getByRole("link", {
      name: /login/i
    });

    expect(link).toHaveAttribute("href", "/login");
  });

  test("register link points to register page", () => {
    renderWithProviders(<App />);

    const link = screen.getByRole("link", {
      name: /register/i
    });

    expect(link).toHaveAttribute("href", "/register");
  });
});
