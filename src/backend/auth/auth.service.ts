import { Injectable } from '@nestjs/common';
import { UserService } from '../user/userService';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {
  }


  async validateUser(userEmail: string, password: string): Promise<any> {
    //TODO: getUserByEmail
    const user = await this.userService.getUser(userEmail);

    if (user && user.hashedPassword == password) {
      const{hashedPassword, ...result} = user;

      return result;
    }
  }
}
