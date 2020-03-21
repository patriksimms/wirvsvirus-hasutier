import { Injectable } from '@nestjs/common';
import { UserService } from '../user/userService';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {
  }


  async validateUser(userid: string, password: string): Promise<any> {
    const user = await this.userService.getUser(userid);

    if (user && user.hashedPassword == password) {
      const{hashedPassword, ...result} = user;

      return result;
    }
  }
}
