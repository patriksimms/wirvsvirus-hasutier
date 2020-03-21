import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './animal.entity';
import { Repository } from 'typeorm';
import { AnimalType } from './animalType.entity';

@Injectable()
export class AnimalService {
  constructor(@InjectRepository(Animal)
              private animalRepository: Repository<Animal>,
              @InjectRepository(AnimalType)
              private animalTypeRepository: Repository<AnimalType>) {}

  async getAnimal(id: string): Promise<Animal> {
    return this.animalRepository.findOne(id);
  }

  async getAllAnimalsForUser(userId: string): Promise<Animal[]> {
    return this.animalRepository.find({where: {owner: userId}})
  }

  async getAllAnimalTypes(): Promise<AnimalType[]> {
    return this.animalTypeRepository.find();
  }
}