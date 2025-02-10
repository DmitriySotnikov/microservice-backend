import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { serverConfig } from '../configs/common.config';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: serverConfig.JWT_SECRET,
    }),
  ],
  providers: [],
  controllers: [],
  exports: [],
})
export class AuthModule {}
