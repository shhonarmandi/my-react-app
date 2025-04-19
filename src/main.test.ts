import {test, expect} from 'vitest';
import {ROUTES} from '@constants';

test('test', () => {
  expect(ROUTES.PUBLIC.HOMEPAGE).toBe('/');
});
