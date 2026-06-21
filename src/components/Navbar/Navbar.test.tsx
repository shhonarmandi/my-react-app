import {describe, it, expect, vi} from 'vitest';
import {screen} from '@testing-library/react';
import {Navbar} from './Navbar';
import {renderWithProviders} from '../../test-utils';

vi.mock('react-i18next', async importOriginal => {
  const actual = await importOriginal<typeof import('react-i18next')>();
  return {
    ...actual,
    useTranslation: vi.fn(() => ({
      t: (key: string) => key,
      i18n: {language: 'en', changeLanguage: vi.fn()},
    })),
  };
});

vi.mock('@tanstack/react-router', () => ({
  Link: ({children, to}: {children: React.ReactNode; to: string}) => (
    <a href={to}>{children}</a>
  ),
}));

describe('Navbar', () => {
  it('renders all nav items', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('renders the home nav link', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('navbar.home')).toBeInTheDocument();
  });

  it('renders the aboutUs nav link', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('navbar.aboutUs')).toBeInTheDocument();
  });

  it('renders the dashboard nav link', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('navbar.dashboard')).toBeInTheDocument();
  });
});
