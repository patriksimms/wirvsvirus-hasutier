import { Injectable } from '@nestjs/common';
import { user } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(user)
  private userRepository: Repository<user>) {}

  getUser(id: string): user {
    let response: Promise<user> = this.userRepository.findOne(id);
    response.then((user) => {
      return user;
    }, (reason) => {
      return null;
    });
    return null;
  }

  createUser(data: user): boolean {
    let response: Promise<user> = this.userRepository.save(data);
    response.then((user) => {
      return true;
    }, (reason) => {
      return false;
    });
    return false;
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  validateUser(data: user): boolean {
    return true;
  }
}