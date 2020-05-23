import * as Lab              from '@hapi/lab';
import { expect }            from '@hapi/code';
import { createTypeOrmConn } from '../../../util/createTypeOrmConn';
import { Success, Fail }     from "monet";

import { create }       from '../../../src/services/Users';
import { User }         from '../../../src/entity/User';
import { Country }      from '../../../src/entity/Country';
import { create }       from '../../../src/services/users';
import * as UserRepo    from '../../../src/repositories/userRepository';
import * as CountryRepo from '../../../src/repositories/countryRepository';

const lab = Lab.script();

const {
  after,
  before,
  describe,
  it
} = lab;

const input = {
  firstName: 'Chandler',
  lastName: 'Bing',
  email: 'chandlerbing@mail.com',
  password: 'idontcare',
  passwordConfirmation: 'idontcare',
  phoneNumber: '+57 321 320 1312',
  countryCode: 'CO',
  birthday: new Date('2/28/1969'),
  role: 'player'
}

export { lab };

before(async () => {
  await createTypeOrmConn();
});

describe('create', () => {
  it('Creates a new user when data is valid', async () => {
    let country = new Country()
    country.name = 'Colombia',
    country.codeIso = 'CO',
    country.currency = 'COP',
    country.countryCode = '+57'

    await CountryRepo.save(country)

    const result = await create(input);

    const user = await UserRepo.last();
    const expectedResult = Success(user);
    expect(result).to.equal(expectedResult)
  })
});
