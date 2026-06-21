import {ComponentType} from 'react';
import {useTheme as useStyledComponentTheme} from 'styled-components';
import {THEMES, useTheme} from '@services/theme';
import {DarkMode, DesktopWindows, IconProps, LightMode} from '@components';
import * as Styled from './ThemeSwitcher.styled.ts';

const THEME_OPTIONS: {
  value: THEMES;
  label: string;
  Icon: ComponentType<IconProps>;
}[] = [
  {value: THEMES.LIGHT, label: 'select light theme', Icon: LightMode},
  {value: THEMES.DEVICE, label: 'select device theme', Icon: DesktopWindows},
  {value: THEMES.DARK, label: 'select dark theme', Icon: DarkMode},
];

export function ThemeSwitcher() {
  const theme = useStyledComponentTheme();
  const {theme: savedTheme, setTheme} = useTheme();

  return (
    <Styled.UnOrderedList>
      {THEME_OPTIONS.map(({value, label, Icon}) => (
        <Styled.ListItem key={value}>
          <Styled.Button
            aria-label={label}
            onClick={() => setTheme(value)}
            className={savedTheme === value ? 'active-theme' : undefined}>
            <Icon
              width={16}
              height={16}
              fill={theme.colors.onSurface.hightEmphasis}
            />
          </Styled.Button>
        </Styled.ListItem>
      ))}
    </Styled.UnOrderedList>
  );
}
