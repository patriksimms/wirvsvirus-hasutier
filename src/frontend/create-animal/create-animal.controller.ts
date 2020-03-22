import { Body, Controller, Get, HttpService, Post, Render, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';
import { elementAt } from 'rxjs/operators';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('create-animal')
export class CreateAnimalController {

  @Get()
  @Render('createAnimal')
  async index() {
    const ser = new BeConnectionService(new HttpService());
    const animals = await ser.getAllAnimals();
    return { 'animals': animals };
  }

  @Post("/submit")
  @UseInterceptors(FileInterceptor('animalFile'))
  async submit(@Body() body, @UploadedFile() file){
    const ser = new BeConnectionService(new HttpService());

    const animal = {
      "type": body.animalSpecies,
      "name": body.animalName,
      "age": body.animalAge,
      "weight": body.animalWeight,
      "size": body.animalHeight,
      "description": body.animalDescription,
      "owner": "c7b8df97-0592-41e2-9ef0-b60317dca89c"
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
