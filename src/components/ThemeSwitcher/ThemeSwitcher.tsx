import {useTheme as useStyledComponentTheme} from 'styled-components';
import classNames from 'classnames';
import {THEMES, useTheme} from '@services/theme';
import {DarkMode, DesktopWindows, LightMode} from '@components';
import * as Styled from './ThemeSwitcher.styled.ts';

export function ThemeSwitcher() {
  const theme = useStyledComponentTheme();
  const {theme: savedTheme, setTheme} = useTheme();

  function changeTheme(theme: THEMES) {
    return function () {
      setTheme(theme);
    };
  }

  return (
    <Styled.UnOrderedList>
      <Styled.ListItem>
        <Styled.Button
          aria-label="select light theme"
          onClick={changeTheme(THEMES.LIGHT)}
          className={classNames({
            'active-theme': savedTheme === THEMES.LIGHT,
          })}>
          <LightMode
            width={16}
            height={16}
            fill={theme.colors.onSurface.hightEmphasis}
          />
        </Styled.Button>
      </Styled.ListItem>
      <Styled.ListItem>
        <Styled.Button
          aria-label="select device theme"
          onClick={changeTheme(THEMES.DEVICE)}
          className={classNames({
            'active-theme': savedTheme === THEMES.DEVICE,
          })}>
          <DesktopWindows
            width={16}
            height={16}
            fill={theme.colors.onSurface.hightEmphasis}
          />
        </Styled.Button>
      </Styled.ListItem>
      <Styled.ListItem>
        <Styled.Button
          aria-label="select dark theme"
          onClick={changeTheme(THEMES.DARK)}
          className={classNames({
            'active-theme': savedTheme === THEMES.DARK,
          })}>
          <DarkMode
            width={16}
            height={16}
            fill={theme.colors.onSurface.hightEmphasis}
          />
        </Styled.Button>
      </Styled.ListItem>
    </Styled.UnOrderedList>
  );
}
