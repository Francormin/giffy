export const mockUseGlobalGifs = jest.fn();

jest.mock("hooks/useGlobalGifs", () => ({
  __esModule: true,
  default: () => mockUseGlobalGifs()
}));
