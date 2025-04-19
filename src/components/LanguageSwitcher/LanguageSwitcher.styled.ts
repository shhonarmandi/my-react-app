import styled from 'styled-components';

export const UnOrderedList = styled.ul`
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  gap: ${({theme}) => theme.spacing.md};
`;
