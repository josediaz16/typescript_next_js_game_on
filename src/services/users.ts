import { Validation, Success, Fail } from "monet";

import { save }    from '../repositories/userRepository';
import { encrypt } from '../../util/crypto';
import { User }    from '../entity/User';
import { findByCodeIso as findCountryByCodeIso } from '../repositories/countryRepository';

type Result = Validation<User, any>;

async function create(user: User): Promise<Result> {
  const {
    password,
    passwordConfirmation,
    countryCode: codeIso,
    ...userData
  } = user;

  const encryptedPassword = await encrypt(password);
  const country = await findCountryByCodeIso(codeIso);
  const newUser = await save({...userData, encryptedPassword, countryId: country.id});
  return Success(newUser)
};

export {
  create
}
