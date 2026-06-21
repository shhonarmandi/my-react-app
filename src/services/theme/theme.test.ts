import {describe, it, expect} from 'vitest';
import {THEMES, LIGHT_THEME, DARK_THEME} from './constants/theme';
import {PALETTE} from './constants/tokens/palette';
import {SPACING} from './constants/tokens/spacing';
import {ROUNDING} from './constants/tokens/rounding';
import {RESPONSIVE} from './constants/tokens/responsive';

describe('THEMES enum', () => {
  it('has DARK value', () => expect(THEMES.DARK).toBe('dark'));
  it('has LIGHT value', () => expect(THEMES.LIGHT).toBe('light'));
  it('has DEVICE value', () => expect(THEMES.DEVICE).toBe('device'));
});

describe('LIGHT_THEME', () => {
  it('has surface color', () => {
    expect(LIGHT_THEME.colors.surface).toBe(PALETTE.NEUTRAL[0]);
  });

  it('has highEmphasis onSurface color', () => {
    expect(LIGHT_THEME.colors.onSurface.hightEmphasis).toBe(
      PALETTE.NEUTRAL[100]
    );
  });

  it('has spacing, rounding, responsive', () => {
    expect(LIGHT_THEME.spacing).toBeDefined();
    expect(LIGHT_THEME.rounding).toBeDefined();
    expect(LIGHT_THEME.responsive).toBeDefined();
  });
});

describe('DARK_THEME', () => {
  it('has surface color', () => {
    expect(DARK_THEME.colors.surface).toBe(PALETTE.NEUTRAL[100]);
  });

  it('has highEmphasis onSurface color', () => {
    expect(DARK_THEME.colors.onSurface.hightEmphasis).toBe(PALETTE.NEUTRAL[0]);
  });
});

describe('PALETTE', () => {
  it('has NEUTRAL[0] as white', () => {
    expect(PALETTE.NEUTRAL[0]).toBe('#FFFFFF');
  });

  it('has NEUTRAL[100] as dark', () => {
    expect(PALETTE.NEUTRAL[100]).toBe('#141414');
  });
});

describe('SPACING', () => {
  it('has none = 0px', () => expect(SPACING.none).toBe('0px'));
  it('has lg = 16px', () => expect(SPACING.lg).toBe('16px'));
});

describe('ROUNDING', () => {
  it('has none = 0px', () => expect(ROUNDING.none).toBe('0px'));
  it('has full = 999px', () => expect(ROUNDING.full).toBe('999px'));
});

describe('RESPONSIVE', () => {
  it('has xs breakpoint', () => expect(RESPONSIVE.xs).toBe('320px'));
  it('has lg breakpoint', () => expect(RESPONSIVE.lg).toBe('768px'));
});
