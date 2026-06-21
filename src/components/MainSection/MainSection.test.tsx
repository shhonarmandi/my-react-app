import {describe, it, expect, vi} from 'vitest';
import {screen} from '@testing-library/react';
import {MainSection} from './MainSection';
import {renderWithProviders} from '../../test-utils';

vi.mock('@tanstack/react-router', () => ({
  Outlet: () => <div data-testid="outlet" />,
}));

vi.mock('@components', () => ({
  Loading: () => <div data-testid="loading">Loading...</div>,
}));

describe('MainSection', () => {
  it('renders the Outlet inside a Suspense boundary', async () => {
    renderWithProviders(<MainSection />);
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
  });
});
