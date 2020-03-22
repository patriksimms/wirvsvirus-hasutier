import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';
import { AnimalType } from './animalType.entity';
import { User } from '../user/user.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {
  }

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
      throw new BadRequestException('no animals found for user id');
    }
    return animals;
  }

  @Post()
  async createAnimal(@Body() params: Animal): Promise<Animal> {
    return await this.animalService.createAnimal(params);
  }

  @Post(':animalId/upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@Param('animalId') animalId, @Body() body) {
    this.animalService.addImageToAnimal(animalId, body.filename);
    console.log(animalId);
    console.log('file: ' + body.filename);
  }

  @Get(':animalId/image')
  async getUserImage(@Param('animalId') animalId) {
    const animal = await this.animalService.getAnimal(animalId);
    if (animal.imageName == undefined) {
      throw new BadRequestException('animal has no image');
    }

    return animal.imageName;
  }


}
