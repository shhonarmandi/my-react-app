import styled from 'styled-components';

export const Container = styled.footer`
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme}) => theme.spacing['2xl']};
`;
