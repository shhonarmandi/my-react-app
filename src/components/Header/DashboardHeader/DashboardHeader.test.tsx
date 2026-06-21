import {describe, it, expect, vi} from 'vitest';
import {screen} from '@testing-library/react';
import {DashboardHeader} from './DashboardHeader';
import {renderWithProviders} from '../../../test-utils';

vi.mock('react-i18next', async importOriginal => {
  const actual = await importOriginal<typeof import('react-i18next')>();
  return {
    ...actual,
    useTranslation: vi.fn(() => ({
      t: (key: string) => key,
      i18n: {language: 'en'},
    })),
  };
});

vi.mock('@tanstack/react-router', () => ({
  Link: ({children, to}: {children: React.ReactNode; to: string}) => (
    <a href={to}>{children}</a>
  ),
}));

vi.mock('@components', () => ({
  ChevronLeft: ({fill}: {fill: string}) => (
    <svg data-testid="chevron-left" data-fill={fill} />
  ),
}));

describe('DashboardHeader', () => {
  it('renders a link to the homepage', () => {
    renderWithProviders(<DashboardHeader />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders the translated title', () => {
    renderWithProviders(<DashboardHeader />);
    expect(screen.getByText('welcome')).toBeInTheDocument();
  });

  it('renders the ChevronLeft icon', () => {
    renderWithProviders(<DashboardHeader />);
    expect(screen.getByTestId('chevron-left')).toBeInTheDocument();
  });
});
