import { render, screen } from '@testing-library/react';
import App from './App';

test('shows Renato Gomes da Paz on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Renato Gomes da Paz/i);
  expect(nameElement).toBeInTheDocument();
});