import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

describe('Search', () => {
  it('should be render a input text', () => {
    render(<Search />);

    const input = screen.getByLabelText(/buscar por nombre/i);
    expect(input).toBeInTheDocument();
  });

  it('should be render a button', () => {
    render(<Search />);

    const button = screen.getByRole('button', { name: /buscar/i});
    expect(button).toBeInTheDocument();
  });
})