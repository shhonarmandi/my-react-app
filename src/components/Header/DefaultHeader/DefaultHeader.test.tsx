import {describe, it, expect, vi} from 'vitest';
import {screen} from '@testing-library/react';
import {DefaultHeader} from './DefaultHeader';
import {renderWithProviders} from '../../../test-utils';

vi.mock('@components', () => ({
  Navbar: () => <nav data-testid="navbar" />,
}));

describe('DefaultHeader', () => {
  it('renders the Navbar', () => {
    renderWithProviders(<DefaultHeader />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
