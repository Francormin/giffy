export const mockGifs = [
  {
    id: "abc123",
    title: "Funny cat",
    url: "http://fake-cat.gif"
  },
  {
    id: "xyz456",
    title: "Dancing dog",
    url: "http://fake-dog.gif"
  }
];

export const mockNavigate = jest.fn();

jest.mock("wouter", () => ({
  ...jest.requireActual("wouter"),
  useLocation: () => ["/", mockNavigate]
}));

jest.mock("hooks/useGifs", () => ({
  __esModule: true,
  default: () => ({
    gifs: mockGifs,
    isLoading: false,
    isResultEmpty: false,
    setPage: jest.fn()
  })
}));
