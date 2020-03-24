import {
  Body,
  Controller,
  Get,
  HttpService,
  Post,
  Render,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Request
} from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';
import { elementAt } from 'rxjs/operators';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthenticatedGuard } from '../../backend/auth/authenticated.guard';

@Controller('create-animal')
export class CreateAnimalController {

  @Get()
  @UseGuards(AuthenticatedGuard)
  @Render('createAnimal')
  async index() {
    const ser = new BeConnectionService(new HttpService());
    const animals = await ser.getAllAnimals();
    return { 'animals': animals };
  }

  @Post("/submit")
  @UseGuards(AuthenticatedGuard)
  @UseInterceptors(FileInterceptor('animalFile'))
  async submit(@Body() body, @UploadedFile() file, @Request() req){
    const ser = new BeConnectionService(new HttpService());

    const animal = {
      "type": body.animalSpecies,
      "name": body.animalName,
      "age": body.animalAge,
      "weight": body.animalWeight,
      "size": body.animalHeight,
      "description": body.animalDescription,
      "owner": req.user.id
    };

    let res;
    let res2;

    try {
      console.log(animal);
      res = await ser.addAnimal(animal);
      res2 = await ser.addAnimalPicture(res.id, file);
      console.log(res);
    } catch (e) {
      console.log("Error at Adding Animal")
      //TODO ERRORHANDLING
    }
  }
}
