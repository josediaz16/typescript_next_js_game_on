import { Validation, Success, Fail } from "monet";
import { getCustomRepository }       from "typeorm";
import { encrypt }                   from '../../util/crypto';

import { UserRepository }    from '@/repositories/userRepository';
import { CountryRepository } from '@/repositories/countryRepository';
import { User }              from '@/entity/User';

type Result = Validation<User, any>;

async function create(user): Promise<Result> {
  const {
    password,
    passwordConfirmation,
    countryCode: codeIso,
    ...userData
  } = user;

  const userRepo = getCustomRepository(UserRepository);
  const countryRepo = getCustomRepository(CountryRepository);
  const encryptedPassword = await encrypt(password);
  const country = await countryRepo.findByCodeIso(codeIso);
  const newUser = await userRepo.save({...userData, encryptedPassword, countryId: country.id});
  return Success(newUser)
};

export {
  create
}
