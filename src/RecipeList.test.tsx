import { render, screen } from '@testing-library/react';
import RecipeList from './RecipeList';

test('renders learn react link', () => {
  render(<RecipeList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
