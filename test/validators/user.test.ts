import * as Lab   from '@hapi/lab';
import { expect } from '@hapi/code';

import { createSchema }   from '../../src/validators/user';

const lab = Lab.script();

const {
  afterEach,
  beforeEach,
  describe,
  it
} = lab;

export { lab };

const input = {
  firstName: 'Chandler',
  lastName: 'Bing',
  email: 'chandlerbing@mail.com',
  password: 'idontcare',
  passwordConfirmation: 'idontcare',
  phone: '3213201312',
  birthday: '2/28/1969',
  role: 'Player'
}

const options = {
  abortEarly: false
}

describe('createSchema', () => {
  it('is ok for valid input', () => {
    const { error, value } = createSchema.validate(input, options)

    expect(error).to.equal(undefined);
    expect(value).to.include({
      email: 'chandlerbing@mail.com',
      firstName: 'Chandler',
      lastName: 'Bing',
      password: 'idontcare',
      passwordConfirmation: 'idontcare',
      phone: '3213201312'
    };
    expect(value.birthday).to.be.a.date();
  })

  it('is not valid if email has wrong format', () => {
    let newInput = {...input, email: 'hey'}
    const { error, value } = createSchema.validate(newInput, options)

    expect(error.details).to.equal([
      {
        message: '"email" must be a valid email',
        path: ['email'],
        type: 'string.email',
        context: { value: 'hey', invalids: ['hey'], label: 'email', key: 'email' }
      }
    ]);
  })

  it('is not valid when input is empty', () => {
    const { error, value } = createSchema.validate({}, options)

    const expectedErrors = [
      {
        message: '"firstName" is required',
        path: [ 'firstName' ],
        type: 'any.required',
        context: { label: 'firstName', key: 'firstName' }
      },
      {
        message: '"lastName" is required',
        path: [ 'lastName' ],
        type: 'any.required',
        context: { label: 'lastName', key: 'lastName' }
      },
      {
        message: '"phone" is required',
        path: [ 'phone' ],
        type: 'any.required',
        context: { label: 'phone', key: 'phone' }
      },
      {
        message: '"email" is required',
        path: [ 'email' ],
        type: 'any.required',
        context: { label: 'email', key: 'email' }
      },
      {
        message: '"password" is required',
        path: [ 'password' ],
        type: 'any.required',
        context: { label: 'password', key: 'password' }
      },
      {
        message: '"role" is required',
        path: [ 'role' ],
        type: 'any.required',
        context: { label: 'role', key: 'role' }
      }
    ]

    expect(error.details).to.equal(expectedErrors);
  })
})
