import {ReactNode} from 'react';
import {Theme} from '../types';
import {THEMES} from '../constants';

export interface ThemeContextProps {
  theme: THEMES;
  setTheme: (theme: THEMES) => void;
}

export interface ThemeProviderProps {
  localStorageKey: string;
  children: ReactNode;
  customizedTheme?: Partial<Theme>;
}
