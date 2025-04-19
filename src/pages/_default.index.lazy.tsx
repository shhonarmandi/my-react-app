import {createLazyFileRoute} from '@tanstack/react-router';
import {useTranslation} from 'react-i18next';

export function Homepage() {
  const {t} = useTranslation('home');

  return <h1>{t('hello')}</h1>;
}

export const Route = createLazyFileRoute('/_default/')({
  component: Homepage,
});
