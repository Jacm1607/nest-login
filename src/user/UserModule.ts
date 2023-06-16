import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './UserService';
import { UserModel } from 'src/user/UserModel';
import { UsersController } from './UserController';
import { LogModule } from 'src/log/LogModule';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel]), LogModule],
  providers: [UserService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UserModule {}
