import { Controller, Get, HttpService, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('create-offer')
export class CreateOfferController {

  @Get()
  @Render('createOffer')
  async index() {
    const ser = new BeConnectionService(new HttpService());
    const animals = await ser.getAllAnimals();
    return { 'animals': animals };
  }
}
