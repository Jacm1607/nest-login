import { Injectable } from '@nestjs/common';
import { IEncrypt } from 'src/encrypt/Interface/IEncrypt';

@Injectable()
export class EncryptHex implements IEncrypt {
  encrypt(password: string) {
    const encondeData = Buffer.from(password, 'utf-8').toString('hex');
    return encondeData;
  }

  decrypt(password: string, dbPassword) {
    const decodedData = Buffer.from(dbPassword, 'hex').toString('utf-8');
    return password === decodedData;
  }
}
