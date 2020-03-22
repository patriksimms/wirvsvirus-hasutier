import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    if (user && user.hashedPassword === pass) {
      const { hashedPassword, ...result } = user;
      return result;
    }
    return null;
  }

  public async register(user: User): Promise<any> {
    return this.userService.createUser(user);
  }
}
