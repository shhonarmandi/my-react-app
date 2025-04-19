import styled from 'styled-components';

export const UnOrderedList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: ${({theme}) => theme.spacing.xs};
  padding: ${({theme}) => theme.spacing.xs};
  border-radius: ${({theme}) => theme.rounding.full};
  border: 1px solid ${({theme}) => theme.colors.onSurface.lowEmphasis};
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.rounding.full};
`;

export const Button = styled.button`
  padding: 8px;

  &.active-theme {
    background-color: ${({theme}) => theme.colors.onSurface.lowEmphasis};
  }
`;
