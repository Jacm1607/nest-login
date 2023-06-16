import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from './UserService';

@Controller('user')
export class UsersController {
  constructor(private readonly userservice: UserService) {}

  @Get('register')
  async register(@Body() request) {
    return this.userservice.register(request);
  }

  @Get()
  async getUsers() {
    return this.userservice.getAll();
  }
}
