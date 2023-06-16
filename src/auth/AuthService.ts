import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { EncryptBase64 } from 'src/encrypt/encryptBase64';
import { UserService } from 'src/user/UserService';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}
  private readonly setEncrypt = new EncryptBase64();

  async signIn(username, password) {
    try {
      const [user] = await this.usersService.findUser(username);
      const isMatch = await this.validatePassword(password, user);
      if (!isMatch) {
        throw new UnauthorizedException();
      }
      return { statusCode: 200 };
    } catch (error) {
      throw new UnauthorizedException('Error', 'Campo vacio');
    }
  }

  async validatePassword(password, user) {
    return await this.setEncrypt.decrypt(password, user.password);
  }
}
