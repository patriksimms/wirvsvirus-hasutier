import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
  }

  async getUser(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async createUser(data: User): Promise<User> {
    //TODO: create id
    return await this.userRepository.save(data);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async addImageToUser(id: string, imageName: string) {
    await this.userRepository.update({ id: id }, { imageName: imageName });


  }

}
