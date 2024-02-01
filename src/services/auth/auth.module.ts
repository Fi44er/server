import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CookieService } from './cookie/cookie.service';
import { PasswordService } from './password/password.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  providers: [AuthService, CookieService, PasswordService],
  controllers: [AuthController]
})
export class AuthModule { }
