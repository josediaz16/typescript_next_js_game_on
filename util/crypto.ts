import * as bcrypt from 'bcrypt';

const SaltRounds = 4;

async function encrypt(plainText: string): Promise<string> {
  const encryptedText = await bcrypt.hash(plainText, SaltRounds);
  return encryptedText
};

export {
  encrypt
}
