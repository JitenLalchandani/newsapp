import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the news app content', () => {
  render(<App />);
  expect(screen.getByText(/breaking news/i)).toBeInTheDocument();
});
