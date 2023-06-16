import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './user/UserModel';
import { UserModule } from './user/UserModule';
import { AuthModule } from './auth/AuthModule';
import { WinstonModule } from 'nest-winston';
import { transports, format } from 'winston';
import { LogModule } from './log/LogModule';
import { LogModel } from './log/LogModel';

@Module({
  imports: [
    WinstonModule.forRoot({
      // options
      transports: [
        new transports.File({
          filename: `logs/logs.log`,
          level: 'info',
          format: format.combine(format.timestamp(), format.json()),
        }),
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database',
      entities: [LogModel, UserModel],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
