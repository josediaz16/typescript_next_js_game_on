const Joi = require('@hapi/joi');
const Phonenumber = require('awesome-phonenumber');

const ValidRoles = ['Player', 'Admin'];
const PasswordRegex = new RegExp('^[a-zA-Z0-9]{3,30}$');

const RequiredString = Joi.string().required();

const validatePhone = (value, helpers) => {
  const {
    state: {
      ancestors: [input]
    }
  } = helpers;
  const phoneNumber = Phonenumber(value, input.countryCode);

  if (phoneNumber.isValid()) {
    return phoneNumber.getNumber('international');
  }

  return helpers.error('any.invalid');
}

const createSchema = Joi.object({
  firstName: RequiredString,
  lastName: RequiredString,
  birthday: Joi.date(),
  phone: RequiredString
    .custom(validatePhone, 'Phone validation')
    .messages({'any.invalid': 'Phone Number or Country Code invalid'}),
  countryCode: RequiredString
    .min(2)
    .max(2)
    .uppercase(),
  email: RequiredString.email({multiple: false}),
  password: RequiredString.pattern(PasswordRegex),
  passwordConfirmation: Joi.ref('password'),
  role: RequiredString.allow(...ValidRoles)
})

export {
  createSchema
}
