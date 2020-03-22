import { Controller, Get, HttpService, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('searchHelper')
export class SearchhelperController {

  @Get()
  @Render('searchHelper')
async index() {
    const ser = new BeConnectionService(new HttpService());
    const animals = await ser.getAllAnimals();
    const services = await ser.getAllServices();
    const offers = await ser.getAllOffers();
    return { 'animals': animals, 'services' : services, 'helpers':offers };
  }
}
