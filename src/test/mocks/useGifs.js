export const mockUseGifs = jest.fn();

jest.mock("hooks/useGifs", () => ({
  __esModule: true,
  default: (...args) => mockUseGifs(...args)
}));
