import { Factory } from 'fishery';

import { Country } from '@/entity/Country';
import { User }    from '@/entity/User';

export interface Factories {
  country: Factory<Country>,
  user: Factory<User>
};
