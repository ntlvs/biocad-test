import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtService {
  constructor(private configService: ConfigService) {}

  sign(payload: any): string {
    return jwt.sign(payload, this.configService.get('JWT_SECRET'), {
      expiresIn: '1h',
    });
  }

  verify(token: string): any {
    return jwt.verify(token, this.configService.get('JWT_SECRET'));
  }
}