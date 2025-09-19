import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";

test("home renders gifs from mocked API", async () => {
  render(<App />);

  const catGif = await screen.findByText("Funny cat");
  const dogGif = await screen.findByText("Dancing dog");

  expect(catGif).toBeVisible();
  expect(dogGif).toBeVisible();
});

test("home renders a gif card for each gif from mocked API", async () => {
  const { container } = render(<App />);

  const gifCard = await waitFor(() => {
    const el = container.querySelector(".Gif-card");
    if (!el) throw new Error("Gif-card not found yet");
    return el;
  });

  expect(gifCard).toBeInTheDocument();

  // Alternativa más recomendable:
  // const image = await screen.findByRole("img", { name: /funny cat/i });
  // expect(image.closest(".Gif-card")).toBeInTheDocument();
});

test("search form could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(button);

  const title = await screen.findByText("results for: Matrix");
  expect(title).toBeVisible();
});
