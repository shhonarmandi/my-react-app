import {Colors} from './colors';
import {RESPONSIVE, ROUNDING, SPACING} from '../constants';

export interface Theme {
  colors: Colors;
  spacing: typeof SPACING;
  rounding: typeof ROUNDING;
  responsive: typeof RESPONSIVE;
}
