import {LANGUAGES} from '@services/i18n';
import {useTranslation} from 'react-i18next';
import * as Styled from './LanguageSwitcher.styled';

export function LanguageSwitcher() {
  const {t, i18n} = useTranslation('common');

  const changeLanguage = (language: LANGUAGES) => {
    i18n.changeLanguage(language);
  };

  return (
    <Styled.UnOrderedList>
      <li>
        <button
          aria-label={t('changeLanguageTo', {language: t('english')})}
          onClick={() => changeLanguage(LANGUAGES.EN)}>
          {LANGUAGES.EN.toUpperCase()}
        </button>
      </li>
      <li>
        <button
          aria-label={t('changeLanguageTo', {language: t('german')})}
          onClick={() => changeLanguage(LANGUAGES.DE)}>
          {LANGUAGES.DE.toUpperCase()}
        </button>
      </li>
    </Styled.UnOrderedList>
  );
}
