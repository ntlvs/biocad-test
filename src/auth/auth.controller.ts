import { Body, Controller, Post, UnauthorizedException, ConflictException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() authDto: AuthDto) {
    const isExisted = await this.authService.checkExisted(authDto.email);
    if (isExisted) throw new ConflictException('User already exist')

    const { id: userId } = await this.authService.signUp(authDto.email, authDto.password);
    return { userId };
  }

  @Post('signin')
  async signIn(@Body() authDto: AuthDto) {
    const user = await this.authService.validateUser(authDto.email, authDto.password);
    if (!user) throw new UnauthorizedException();
    return this.authService.signIn(user);
  }
}
