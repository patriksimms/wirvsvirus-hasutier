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
}
