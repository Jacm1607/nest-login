import { Body, Controller, Get } from '@nestjs/common';
import { LogService } from './LogService';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get('register')
  async registerLog(@Body() request) {
    return this.logService.register(request);
  }

  @Get('')
  async get() {
    return await this.logService.getAll();
  }
}
