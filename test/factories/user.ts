import { Factory }   from 'fishery';
import { Factories } from './types';

import { User, UserRole } from '@/entity/User';

export default Factory.define<User, Factories>(({ sequence, factories, associations}) => {
  const country = associations.country || factories.country.build();

  return {
    id: sequence,
    firstName: 'Chandler',
    lastName: 'Bing',
    email: 'chandlerbing@mail.com',
    encryptedPassword: 'encrypted',
    phoneNumber: '+57 321 320 1312',
    birthday: new Date('2/28/1969'),
    role: UserRole.PLAYER,
    countryId: country.id,
    country: country
  }
});
