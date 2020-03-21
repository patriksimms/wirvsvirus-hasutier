import { Injectable } from '@nestjs/common';
import { user } from './user';

@Injectable()
export class UserService {

  getUser(id: string): string {
    return id;
  }

  createUser(data: user): boolean {
    return true;
  }

  deleteUser(id: string): string {
    return id;
  }

  validateUser(data: user): boolean {
    return true;
  }
}