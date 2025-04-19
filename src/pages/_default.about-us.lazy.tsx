import {createLazyFileRoute} from '@tanstack/react-router';
import {useTranslation} from 'react-i18next';

export function AboutUsPage() {
  const {t} = useTranslation('aboutUs');

  return <h1>{t('aboutUsPage')}</h1>;
}

export const Route = createLazyFileRoute('/_default/about-us')({
  component: AboutUsPage,
});
