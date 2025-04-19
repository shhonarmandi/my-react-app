import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing['2xl']};
  padding: ${({theme}) => theme.spacing['2xl']};
`;
