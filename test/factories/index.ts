import { register } from 'fishery';
import { Factories } from './types';

import country from './country';
import user    from './user';

export const factories: Factories = register({
  country,
  user
});
