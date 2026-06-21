import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {NotFound} from './NotFound';

describe('NotFound', () => {
  it('renders "Page Not Found!" heading', () => {
    render(<NotFound />);
    expect(
      screen.getByRole('heading', {name: /page not found/i})
    ).toBeInTheDocument();
  });
});
