import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogModel } from './LogModel';
import { Repository } from 'typeorm';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LogModel)
    private logsRepository: Repository<LogModel>,
  ) {}

  async register(request) {
    return await this.logsRepository.save(request);
  }

  async getAll() {
    return await this.logsRepository.find();
  }
}
