import {Theme} from '../types';
import {PALETTE, RESPONSIVE, ROUNDING, SPACING} from './tokens';

export enum THEMES {
  'DARK' = 'dark',
  'LIGHT' = 'light',
  'DEVICE' = 'device',
}

const commonThemesProps = {
  spacing: SPACING,
  rounding: ROUNDING,
  responsive: RESPONSIVE,
};

export const LIGHT_THEME: Theme = {
  ...commonThemesProps,
  colors: {
    surface: PALETTE.NEUTRAL[0],
    onSurface: {
      lowEmphasis: PALETTE.NEUTRAL[20],
      mediumEmphasis: PALETTE.NEUTRAL[70],
      hightEmphasis: PALETTE.NEUTRAL[100],
    },
  },
};

export const DARK_THEME: Theme = {
  ...commonThemesProps,
  colors: {
    surface: PALETTE.NEUTRAL[100],
    onSurface: {
      lowEmphasis: PALETTE.NEUTRAL[70],
      mediumEmphasis: PALETTE.NEUTRAL[50],
      hightEmphasis: PALETTE.NEUTRAL[0],
    },
  },
};
