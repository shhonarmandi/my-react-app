import {describe, it, expect, vi} from 'vitest';
import {screen, fireEvent} from '@testing-library/react';
import {LanguageSwitcher} from './LanguageSwitcher';
import {renderWithProviders} from '../../test-utils';

const changeLanguageMock = vi.fn();

vi.mock('react-i18next', async importOriginal => {
  const actual = await importOriginal<typeof import('react-i18next')>();
  return {
    ...actual,
    useTranslation: vi.fn(() => ({
      t: (key: string, opts?: Record<string, string>) =>
        opts ? `${key}:${JSON.stringify(opts)}` : key,
      i18n: {language: 'en', changeLanguage: changeLanguageMock},
    })),
  };
});

describe('LanguageSwitcher', () => {
  it('renders EN and DE buttons', () => {
    renderWithProviders(<LanguageSwitcher />);
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('DE')).toBeInTheDocument();
  });

  it('calls changeLanguage with "en" when EN button clicked', () => {
    renderWithProviders(<LanguageSwitcher />);
    fireEvent.click(screen.getByText('EN'));
    expect(changeLanguageMock).toHaveBeenCalledWith('en');
  });

  it('calls changeLanguage with "de" when DE button clicked', () => {
    renderWithProviders(<LanguageSwitcher />);
    fireEvent.click(screen.getByText('DE'));
    expect(changeLanguageMock).toHaveBeenCalledWith('de');
  });
});
