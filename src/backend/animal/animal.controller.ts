import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';
import { AnimalType } from './animalType.entity';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get('types')
  async getAllAnimalTypes(): Promise<AnimalType[]> {
    return await this.animalService.getAllAnimalTypes();
  }

  @Get(':id')
  async getAnimal(@Param() params): Promise<Animal> {
    const animal = await this.animalService.getAnimal(params.id);

    if (animal === undefined) {
      throw new BadRequestException('animal id not found');
    }
    return animal;
  }

  @Get('user/:id')
  async getAnimalForUser(@Param() params): Promise<Animal[]> {
    const animals = await this.animalService.getAllAnimalsForUser(params);

    if (animals === undefined || animals.length == 0) {
      throw new BadRequestException('no animals found for user id')
    }
    return animals;
  }
}