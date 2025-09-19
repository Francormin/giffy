// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock para window.scrollTo
window.scrollTo = jest.fn();

// Mock para IntersectionObserver
class IntersectionObserver {
  constructor(callback, options) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});
Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: () =>
      Promise.resolve({
        data: [
          {
            id: "abc123",
            title: "Funny cat",
            images: { original: { url: "http://fake-cat.gif" } },
          },
          {
            id: "xyz456",
            title: "Dancing dog",
            images: { original: { url: "http://fake-dog.gif" } },
          },
        ],
      }),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});
