import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {Loading} from './Loading';

describe('Loading', () => {
  it('renders "Loading..." heading', () => {
    render(<Loading />);
    expect(screen.getByRole('heading', {name: /loading/i})).toBeInTheDocument();
  });
});
