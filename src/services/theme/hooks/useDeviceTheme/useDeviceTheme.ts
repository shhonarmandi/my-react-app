import {useEffect, useMemo, useState} from 'react';
import {THEMES} from '../../constants';

export function useDeviceTheme() {
  const browserTheme = useMemo(
    () => window.matchMedia('(prefers-color-scheme: dark)'),
    []
  );

  const [deviceTheme, setDeviceTheme] = useState(
    browserTheme.matches ? THEMES.DARK : THEMES.LIGHT
  );

  useEffect(() => {
    function handleChangeBrowserTheme(event: MediaQueryListEvent) {
      setDeviceTheme(event.matches ? THEMES.DARK : THEMES.LIGHT);
    }

    browserTheme.addEventListener('change', handleChangeBrowserTheme);

    return () => {
      browserTheme.removeEventListener('change', handleChangeBrowserTheme);
    };
  }, [browserTheme]);

  return {deviceTheme};
}
