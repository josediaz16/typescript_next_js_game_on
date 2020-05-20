const Joi = require('@hapi/joi');

const ValidRoles = ['Player', 'Admin'];
const PasswordRegex = new RegExp('^[a-zA-Z0-9]{3,30}$');

const RequiredString = Joi.string().required();

const createSchema = Joi.object({
  firstName: RequiredString,
  lastName: RequiredString,
  birthday: Joi.date(),
  phone: RequiredString,
  email: RequiredString.email({multiple: false}),
  password: RequiredString.pattern(PasswordRegex),
  passwordConfirmation: Joi.ref('password'),
  role: RequiredString.allow(...ValidRoles)
})

export {
  createSchema
}
