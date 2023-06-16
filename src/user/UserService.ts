import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EncryptBase64 } from 'src/encrypt/encryptBase64';
import { UserModel } from 'src/user/UserModel';
import { Repository } from 'typeorm';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { LogService } from 'src/log/LogService';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private usersRepository: Repository<UserModel>,
    // log File
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    // log db
    private logsService: LogService,
  ) {}
  private readonly setEncrypt = new EncryptBase64();

  async findUser(username) {
    return await this.usersRepository.find({ where: { username } });
  }

  async register(request) {
    try {
      this.logger.log('info', 'Usuario creado');
      this.logsService.register({ description: 'Usuario creado' });
      const password = this.setEncrypt.encrypt(request.password);
      return await this.usersRepository.save({
        ...request,
        password,
      });
    } catch (error) {
      this.logger.error(`Error al registrar: ${error}`);
    }
  }

  async getAll() {
    return await this.usersRepository.find();
  }
}
