import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useLocation} from '@tanstack/react-router';

export function useI18nFocusRefresher(element: HTMLElement | null) {
  const location = useLocation();
  const {i18n} = useTranslation();

  useEffect(() => {
    element?.focus();
  }, [element, location, i18n.language]);
}
