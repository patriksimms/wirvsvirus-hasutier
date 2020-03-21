import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { AnimalService } from './animalService';
import { Animal } from './animal.entity';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get(':id')
  async getAnimal(@Param() params): Promise<Animal> {
    let animal = await this.animalService.getAnimal(params.id);

    if (animal === undefined) {
      throw new BadRequestException('animal id not found');
    }
    return animal;
  }

  @Get('user/:id')
  async getAnimalForUser(@Param() params): Promise<Animal[]> {
    let animals = await this.animalService.getAllAnimalsForUser(params);

    if (animals === undefined || animals.length == 0) {
      throw new BadRequestException('no animals found for user id')
    }
    return animals;
  }
}