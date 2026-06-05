import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/renderWithProviders';
import App from './App';

test('renders without crashing', async () => {
  renderWithProviders(<App />);
  const title = await screen.findByText(/last search/i);
  expect(title).toBeInTheDocument();
});
