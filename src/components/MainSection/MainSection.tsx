import React from 'react';
import {Outlet} from '@tanstack/react-router';
import {Loading} from '@components';
import * as Styled from './MainSection.styled';

export function MainSection() {
  return (
    <Styled.Container>
      <React.Suspense fallback={<Loading />}>
        <Outlet />
      </React.Suspense>
    </Styled.Container>
  );
}
