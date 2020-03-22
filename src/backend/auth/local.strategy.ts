import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService, private jwtService: JwtService, private userService: UserService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    console.log(user);

    if (user && user.hashedPassword == password) {
      console.log('toll');

      const {hashedPassword, ...cleanUser} = user;
      const payload = { username: user.email, sub: user.id };
      return {
        ...cleanUser,
        accessToken: this.jwtService.sign(payload),
      };
    }

    return null;
  }
}