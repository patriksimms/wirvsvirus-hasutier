import { Controller, Get, Render, Request } from '@nestjs/common';
import { AnimalService } from '../../backend/animal/animal.service';
import { ServiceService } from '../../backend/services/serviceService';
import { SearchService } from '../../backend/search/search.service';

@Controller('searchOffer')
export class SearchofferController {
  private animalService: AnimalService;
  private servicesService: ServiceService;
  private searchService: SearchService;


  constructor(animalService: AnimalService, servicesService: ServiceService, searchService: SearchService) {
    this.animalService = animalService;
    this.servicesService = servicesService;
    this.searchService = searchService;
  }

  @Get()
  @Render('searchOffer')
async index(@Request() req) {
    const animals = await this.animalService.getAllAnimalTypes();
    const services = await this.servicesService.getAllServiceTypes();
    const search = await this.searchService.getAllSearches();

    const loggedIn = req.user != undefined;

    return { 'animals': animals, 'services' : services, 'offers' : search, loggedIn: loggedIn };
  }
}
