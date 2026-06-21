import {describe, it, expect, vi} from 'vitest';
import {screen} from '@testing-library/react';
import {Footer} from './Footer';
import {renderWithProviders} from '../../test-utils';

vi.mock('@components', () => ({
  LanguageSwitcher: () => <div data-testid="language-switcher" />,
  ThemeSwitcher: () => <div data-testid="theme-switcher" />,
}));

describe('Footer', () => {
  it('renders LanguageSwitcher', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });

  it('renders ThemeSwitcher', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });
});
