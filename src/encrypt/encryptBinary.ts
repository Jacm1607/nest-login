import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IEncrypt } from 'src/encrypt/Interface/IEncrypt';

@Injectable()
export class EncryptBinary implements IEncrypt {
  encrypt(password: string) {
    const encondeData = Buffer.from(password, 'utf-8').toString('binary');
    return encondeData;
  }

  decrypt(password: string, dbPassword) {
    const decodedData = Buffer.from(dbPassword, 'binary').toString('utf-8');
    return password === decodedData;
  }
}
