import {describe, it, expect, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {DashboardLayout} from './DashboardLayout';

vi.mock('@components', () => ({
  DashboardHeader: () => <header data-testid="dashboard-header" />,
  MainSection: () => <main data-testid="main-section" />,
  Footer: () => <footer data-testid="footer" />,
}));

describe('DashboardLayout', () => {
  it('renders DashboardHeader', () => {
    render(<DashboardLayout />);
    expect(screen.getByTestId('dashboard-header')).toBeInTheDocument();
  });

  it('renders MainSection', () => {
    render(<DashboardLayout />);
    expect(screen.getByTestId('main-section')).toBeInTheDocument();
  });

  it('renders Footer', () => {
    render(<DashboardLayout />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
