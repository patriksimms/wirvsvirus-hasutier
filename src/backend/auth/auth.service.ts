import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

  private saltRounds = 10;

  constructor(private readonly userService: UserService) {
  }

  /**
   * Validates the user that is associated with the given e-mail.
   *
   * @param email The email address of the user
   * @param password The given password for the login
   *
   * @return The user if successful or null if not
   */
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.getUserByEmail(email);

    // Compare plain password with hashed password from db
    const isValidPassword = await bcrypt.compare(password, user.hashedPassword);

    if (isValidPassword) {
      return user;
    } else {
      throw UnauthorizedException;
    }
  }

  /**
   * Registers a new user in the database.
   * Here the password is hashed!
   *
   * @param user The user to write to the database
   */
  public async register(user: User): Promise<User> {
    user.hashedPassword = await bcrypt.hash(user.hashedPassword, this.saltRounds);
    return this.userService.createUser(user);
  }
}
