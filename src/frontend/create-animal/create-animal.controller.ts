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

    //TODO FINISH WHEN API CALL IS READY
    const animal = {
      "species": body.animalSpecies,
      "name": body.animalName,
      "age": body.animalAge,
      "weight": body.animalWeight,
      "height": body.animalHeight,
      "owner": "aa899734-67a7-4772-a1c8-f51bb4655bfd"
    };

    let res;

    try {
      res = await ser.addAnimal(animal);
    } catch (e) {
      console.log("Error at Adding Animal")
      //TODO ERRORHANDLING
    }
  }
}
