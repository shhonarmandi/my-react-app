import styled from 'styled-components';
import {DOM_IDS} from '@constants';

export const Container = styled.main.attrs({
  id: DOM_IDS.MAIN_CONTAINER,
})`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  padding: ${({theme}) => theme.spacing.lg} ${({theme}) => theme.spacing['2xl']};
`;
