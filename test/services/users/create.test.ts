import {
  createConnection,
  getCustomRepository
}  from 'typeorm';

import { Success, Fail }     from "monet";

import { factories }    from '../../factories/index';

import * as Manager     from '../../../util/genericManager';
import { User }         from '@/entity/User';
import { create }       from '@/services/users';

import { CountryRepository } from '@/repositories/countryRepository';

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

let countryRepo;
let conn;

beforeAll(async () => {
  conn = await createConnection();
  countryRepo = getCustomRepository(CountryRepository);
});

afterAll(async () => {
  await conn.close();
})

describe('create', () => {
  test('Creates a new user when data is valid', async () => {
    let country = factories.country.build();

    await countryRepo.save(country)

    const result = await create(input);

    const user = await Manager.last(User);
    const expectedResult = Success(user);
    expect(result).toEqual(expectedResult)
  })
});
