import { Body, Controller, Get, HttpService, Post, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';
import { elementAt } from 'rxjs/operators';

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
  async submit(@Body() body){
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

    try {
      res = await ser.addAnimal(animal);
      console.log(res);
    } catch (e) {
      console.log("Error at Adding Animal")
      //TODO ERRORHANDLING
    }
  }
}
