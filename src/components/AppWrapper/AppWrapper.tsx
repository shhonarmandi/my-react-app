import {useRef} from 'react';
import {useI18nFocusRefresher, useServiceWorker} from '@hooks';
import {GlobalWrapperProps} from './AppWrapper.types';

export function AppWrapper(props: Readonly<GlobalWrapperProps>) {
  const {children} = props;

  const ref = useRef<HTMLSpanElement>(null);
  useI18nFocusRefresher(ref.current);

  useServiceWorker();

  return (
    <>
      <span ref={ref} tabIndex={-1} />
      {children}
    </>
  );
}
