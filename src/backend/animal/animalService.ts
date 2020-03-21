import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './animal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(@InjectRepository(Animal)
              private animalRepository: Repository<Animal>) {}

  async getAnimal(id: string): Promise<Animal> {
    return this.animalRepository.findOne(id);
  }

  async getAllAnimalsForUser(userId: string): Promise<Animal[]> {
    return this.animalRepository.find({where: {owner: userId}})
  }
}