import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: async () => ({
      articles: [
        { title: 'A', description: 'B', urlToImage: 'img1.png', url: 'https://example.com/1' },
        { title: 'C', description: 'D', urlToImage: 'img2.png', url: 'https://example.com/2' }
      ],
      totalResults: 20,
    }),
  });
});

test('renders the news app content', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText(/newsmonkey/i)).toBeInTheDocument();
  });
});

test('loads the next page when the next button is clicked', async () => {
  render(<App />);

  await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  fireEvent.click(screen.getByRole('button', { name: /next/i }));

  await waitFor(() => {
    expect(global.fetch).toHaveBeenLastCalledWith(
      expect.stringContaining('page=2')
    );
  });
});
