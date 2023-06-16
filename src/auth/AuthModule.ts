import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/UserModule';
import { AuthService } from './AuthService';
import { AuthController } from './AuthController';

@Module({
  imports: [
    UserModule,
    // JwtModule.register({
    //   global: true,
    //   secret: jwtConstants.secret,
    //   signOptions: { expiresIn: '60s' },
    // }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
