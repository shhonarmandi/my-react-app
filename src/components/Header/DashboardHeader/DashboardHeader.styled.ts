import {Link as ReactRouterLink} from '@tanstack/react-router';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacing.md};
  padding: ${({theme}) => theme.spacing['2xl']};
`;

export const Link = styled(ReactRouterLink)`
  color: ${({theme}) => theme.colors.onSurface.mediumEmphasis};
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
