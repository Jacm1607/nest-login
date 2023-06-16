export interface IEncrypt {
  encrypt(password: string);
  decrypt(password: string, dbPassword: string);
}
