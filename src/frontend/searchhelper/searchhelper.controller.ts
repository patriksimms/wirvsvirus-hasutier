import { Controller, Get, Query, Render, Request } from '@nestjs/common';
import { AnimalService } from '../../backend/animal/animal.service';
import { ServiceService } from '../../backend/services/serviceService';
import { OfferService } from '../../backend/offer/offer.service';
import { SearchHelperDto } from './searchHelperDto';


@Controller('searchHelper')
export class SearchhelperController {
  private animalService: AnimalService;
  private servicesService: ServiceService;
  private offerService: OfferService;


  constructor(animalService: AnimalService, servicesService: ServiceService, offerService: OfferService) {
    this.animalService = animalService;
    this.servicesService = servicesService;
    this.offerService = offerService;
  }

  @Get()
  @Render('searchHelper')
  async index(@Request() req, @Query() search: SearchHelperDto) {
    const animals = await this.animalService.getAllAnimalTypes();
    const services = await this.servicesService.getAllServiceTypes();

    // apply filter if plz is given, otherwise show all offers
    const offers = search.PLZ !== undefined && search.PLZ !== ""
      ? await this.offerService.getOffersByPLZ(search.PLZ)
      : await this.offerService.getAllOffers();

    const logIn = req.user != undefined;

    return { 'animals': animals, 'services': services, 'helpers': offers, loggedIn: logIn };
  }
}
