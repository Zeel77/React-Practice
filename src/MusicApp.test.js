import { render, screen } from '@testing-library/react';
import MusicApp from './MusicApp';

test('renders learn react link', () => {
  render(<MusicApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
