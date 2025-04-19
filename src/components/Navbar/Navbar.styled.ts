import {Link} from '@tanstack/react-router';
import styled from 'styled-components';

export const UnOrderedList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  gap: ${({theme}) => theme.spacing.md};
`;

export const NavItem = styled(Link)`
  color: ${({theme}) => theme.colors.onSurface.mediumEmphasis};
  transition: color 0.15s ease;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    color: ${({theme}) => theme.colors.onSurface.hightEmphasis};
  }

  &.active {
    color: ${({theme}) => theme.colors.onSurface.hightEmphasis};
    text-decoration: underline;
    text-underline-offset: ${({theme}) => theme.spacing.sm};
  }
`;
