import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new UnauthorizedException();

    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) throw new UnauthorizedException();

    try {
      const payload = this.jwtService.verify(token);
      request.user = payload;
      return true;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}