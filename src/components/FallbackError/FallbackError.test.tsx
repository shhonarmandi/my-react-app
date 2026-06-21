import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {FallbackError} from './FallbackError';

describe('FallbackError', () => {
  it('renders "Something went wrong!" heading', () => {
    render(<FallbackError />);
    expect(
      screen.getByRole('heading', {name: /something went wrong/i})
    ).toBeInTheDocument();
  });
});
