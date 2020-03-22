import { Body, Controller, Get, HttpService, Post, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('create-search')
export class CreateSearchController {

  @Get()
  @Render('createSearch')
  async index() {
    const ser = new BeConnectionService(new HttpService());
    const services = await ser.getAllServices();

    const animals = await ser.getAnimalsForUser('c7b8df97-0592-41e2-9ef0-b60317dca89c');

    return { services: services, animals: animals };
  }

  @Post('/submit')
  async submit(@Body() body) {
    const ser = new BeConnectionService(new HttpService());

    const serviceList = [];
    const animalsList = [];

    for (const elem in body) {
      if (elem.startsWith('searchService')) {
        serviceList.push({ name: elem.substring(13, elem.length) });
      } else if(elem.startsWith('searchAnimal')){
        animalsList.push({ name: elem.substring(12, elem.length) });
      }
    }

    console.log('ServiceList: ' + serviceList);

    const search = {
      'serviceTypes': serviceList,
      'animals': animalsList,
      'description': body.searchDescription,
      'plz': body.searchPLZ,
      'from': body.searchDate,
      'owner': 'c7b8df97-0592-41e2-9ef0-b60317dca89c'
    };

    let res;

    try {
      res = await ser.addSearch(search);
      console.log(res)
    } catch (e) {
      console.log('Error at Adding Search');
      //TODO ERRORHANDLING
    }
  }
}
