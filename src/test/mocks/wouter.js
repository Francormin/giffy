export const mockNavigate = jest.fn();

jest.mock("wouter", () => ({
  ...jest.requireActual("wouter"),
  useLocation: () => ["/", mockNavigate],
  Redirect: ({ to }) => (
    <div data-testid="redirect">
      Redirect to {to}
    </div>
  )
}));
