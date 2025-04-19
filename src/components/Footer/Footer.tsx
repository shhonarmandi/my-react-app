import {LanguageSwitcher, ThemeSwitcher} from '@components';
import * as Styled from './Footer.styled';

export function Footer() {
  return (
    <Styled.Container>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </Styled.Container>
  );
}
