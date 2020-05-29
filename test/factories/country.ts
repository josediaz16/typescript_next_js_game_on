import { Factory } from 'fishery';

import { Country } from '@/entity/Country';

export default Factory.define<Country>(({ sequence }) => ({
  id: sequence,
  name: 'Colombia',
  currency: 'COP',
  codeIso: 'CO',
  countryCode: '+57',
  users: []
}));
