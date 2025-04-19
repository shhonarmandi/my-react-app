import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';
import {ROUTES} from '@constants';
import {ChevronLeft} from '@components';
import * as Styled from './DashboardHeader.styled';

export function DashboardHeader() {
  const theme = useTheme();
  const {t} = useTranslation('profile');

  return (
    <Styled.Container>
      <Styled.Link to={ROUTES.PUBLIC.HOMEPAGE}>
        <ChevronLeft fill={theme.colors.onSurface.hightEmphasis} />
      </Styled.Link>
      <Styled.Title>{t('welcome')}</Styled.Title>
    </Styled.Container>
  );
}
