import { Controller, Get, Param } from '@nestjs/common';
import { AnimalService } from './animalService';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get(':id')
  getAnimal(@Param() params): string {
    return this.animalService.findOneAnimal(params);
  }
}