import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '../jwt/jwt.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [JwtModule, PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}