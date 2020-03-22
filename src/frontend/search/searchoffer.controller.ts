import { Controller, Get, HttpService, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('searchOffer')
export class SearchofferController {

  @Get()
  @Render('searchOffer')
async index() {
    const ser = new BeConnectionService(new HttpService());
    const animals = await ser.getAllAnimals();
    const services = await ser.getAllServices();
    return { 'animals': animals, 'services' : services };
  }
}
