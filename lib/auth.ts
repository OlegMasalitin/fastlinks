import { compare, hash } from 'bcryptjs';

export async function hashPassword(password: string) {
  const hashedPwd = await hash(password, 12);
  return hashedPwd;
}

export async function verifyPassword(password: string, hashPassword: string) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}
