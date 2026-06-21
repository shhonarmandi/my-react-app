import {describe, it, expect, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {DefaultLayout} from './DefaultLayout';

vi.mock('@components', () => ({
  DefaultHeader: () => <header data-testid="default-header" />,
  MainSection: () => <main data-testid="main-section" />,
  Footer: () => <footer data-testid="footer" />,
}));

describe('DefaultLayout', () => {
  it('renders DefaultHeader', () => {
    render(<DefaultLayout />);
    expect(screen.getByTestId('default-header')).toBeInTheDocument();
  });

  it('renders MainSection', () => {
    render(<DefaultLayout />);
    expect(screen.getByTestId('main-section')).toBeInTheDocument();
  });

  it('renders Footer', () => {
    render(<DefaultLayout />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
