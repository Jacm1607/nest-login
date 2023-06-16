import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogModel } from './LogModel';
import { LogService } from './LogService';
import { LogController } from './LogController';

@Module({
  imports: [TypeOrmModule.forFeature([LogModel])],
  providers: [LogService],
  controllers: [LogController],
  exports: [LogService],
})
export class LogModule {}
