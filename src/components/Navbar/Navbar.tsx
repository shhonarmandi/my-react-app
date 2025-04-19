import * as Styled from './Navbar.styled';
import {useTranslation} from 'react-i18next';
import {NAV_ITEMS} from './Navbar.constants';

export function Navbar() {
  const {t} = useTranslation('common');

  return (
    <nav>
      <Styled.UnOrderedList>
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <Styled.NavItem to={item.url}>
              {t(`navbar.${item.title}`)}
            </Styled.NavItem>
          </li>
        ))}
      </Styled.UnOrderedList>
    </nav>
  );
}
