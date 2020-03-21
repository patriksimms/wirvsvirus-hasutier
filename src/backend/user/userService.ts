import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
              private userRepository: Repository<User>) {}

  async getUser(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async createUser(data: User): Promise<User> {
    //TODO: create id
    return await this.userRepository.save(data);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  validateUser(data: User): boolean {
    return true;
  }
}
