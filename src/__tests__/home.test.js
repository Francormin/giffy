import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { gifs } from "test/fixtures/gifs";
import { mockUseGlobalGifs } from "test/mocks/useGlobalGifs";
import { mockNavigate } from "test/mocks/wouter";
import renderWithProviders from "test/renderWithProviders";

import Home from "pages/Home";

beforeEach(() => {
  mockUseGlobalGifs.mockReturnValue({ gifs });

  renderWithProviders(<Home />);
});

describe("Home page", () => {
  // RENDERIZADO
  test("renders gifs returned by useGlobalGifs", async () => {
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
    expect(
      screen.getByRole("heading", {
        name: /last search/i
      })
    ).toBeInTheDocument();
  });

  // INTERACCIÓN
  test("search button is initially disabled and becomes enabled when input has text", () => {
    const input = screen.getByRole("textbox");

    const button = screen.getByRole("button", {
      name: /search/i
    });

    expect(button).toBeDisabled();

    userEvent.type(input, "Matrix");

    expect(button).toBeEnabled();
  });

  // NAVEGACIÓN
  test("submits search and navigates to search results page", () => {
    const input = screen.getByRole("textbox");

    const button = screen.getByRole("button", {
      name: /search/i
    });

    userEvent.type(input, "Batman");
    userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/search/Batman/g/en");
  });
});
