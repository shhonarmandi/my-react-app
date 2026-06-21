import {describe, it, expect, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {AppWrapper} from './AppWrapper';

vi.mock('@hooks', () => ({
  useI18nFocusRefresher: vi.fn(),
  useServiceWorker: vi.fn(),
}));

describe('AppWrapper', () => {
  it('renders children', () => {
    render(
      <AppWrapper>
        <div data-testid="child">hello</div>
      </AppWrapper>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders a hidden span for focus management', () => {
    const {container} = render(
      <AppWrapper>
        <span />
      </AppWrapper>
    );
    const spans = container.querySelectorAll('span');
    const focusSpan = Array.from(spans).find(
      el => el.getAttribute('tabindex') === '-1'
    );
    expect(focusSpan).toBeDefined();
  });
});
