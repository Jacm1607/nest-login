import { Injectable } from '@nestjs/common';
import { IEncrypt } from 'src/encrypt/Interface/IEncrypt';

@Injectable()
export class EncryptBase64 implements IEncrypt {
  encrypt(password: string) {
    console.log(password);
    const encondeData = Buffer.from(password, 'utf-8').toString('base64');
    return encondeData;
  }

  decrypt(password: string, dbPassword) {
    const decodedData = Buffer.from(dbPassword, 'base64').toString('utf-8');
    return password === decodedData;
  }
}
