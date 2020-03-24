import { Body, Controller, Get, HttpService, Post, Render, UseGuards, Request } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';
import { AuthenticatedGuard } from '../../backend/auth/authenticated.guard';

@Controller('create-search')
export class CreateSearchController {

  @Get()
  @UseGuards(AuthenticatedGuard)
  @Render('createSearch')
  async index(@Request() req) {
    const ser = new BeConnectionService(new HttpService());
    const services = await ser.getAllServices();

    let animals;

    let logIn = false;

    if(req.user != undefined){
      logIn = true;
    }

    try {
      animals = await ser.getAnimalsForUser(req.user.id);
    } catch (e) {
    }

    return { services: services, animals: animals, loggedIn: logIn };
  }

  @Post('/submit')
  @UseGuards(AuthenticatedGuard)
  async submit(@Body() body, @Request() req) {
    const ser = new BeConnectionService(new HttpService());

    const serviceList = [];
    const animalsList = [];

    for (const elem in body) {
      if (elem.startsWith('searchService')) {
        serviceList.push(elem.substring(13, elem.length));
      } else if(elem.startsWith('searchAnimal')){
        animalsList.push(elem.substring(12, elem.length));
      }
    }

    console.log('ServiceList: ' + serviceList);

    const search = {
      'serviceTypes': serviceList,
      'animals': animalsList,
      'description': body.searchDescription,
      'plz': body.searchPLZ,
      'from': body.searchDate,
      'owner': req.user.id
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
