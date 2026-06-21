import {describe, it, expect, vi} from 'vitest';
import {screen, fireEvent} from '@testing-library/react';
import {ThemeSwitcher} from './ThemeSwitcher';
import {renderWithProviders} from '../../test-utils';
import {THEMES} from '@services/theme';

const setThemeMock = vi.fn();

vi.mock('@services/theme', async () => {
  const actual = await vi.importActual('@services/theme');
  return {
    ...(actual as object),
    useTheme: vi.fn(() => ({theme: THEMES.LIGHT, setTheme: setThemeMock})),
  };
});

describe('ThemeSwitcher', () => {
  it('renders 3 theme buttons', () => {
    renderWithProviders(<ThemeSwitcher />);
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });

  it('renders light, device, dark theme buttons by aria-label', () => {
    renderWithProviders(<ThemeSwitcher />);
    expect(screen.getByLabelText('select light theme')).toBeInTheDocument();
    expect(screen.getByLabelText('select device theme')).toBeInTheDocument();
    expect(screen.getByLabelText('select dark theme')).toBeInTheDocument();
  });

  it('calls setTheme with LIGHT when light button is clicked', () => {
    renderWithProviders(<ThemeSwitcher />);
    fireEvent.click(screen.getByLabelText('select light theme'));
    expect(setThemeMock).toHaveBeenCalledWith(THEMES.LIGHT);
  });

  it('calls setTheme with DARK when dark button is clicked', () => {
    renderWithProviders(<ThemeSwitcher />);
    fireEvent.click(screen.getByLabelText('select dark theme'));
    expect(setThemeMock).toHaveBeenCalledWith(THEMES.DARK);
  });

  it('applies active-theme class to the current theme button', () => {
    renderWithProviders(<ThemeSwitcher />);
    expect(screen.getByLabelText('select light theme')).toHaveClass(
      'active-theme'
    );
  });
});
