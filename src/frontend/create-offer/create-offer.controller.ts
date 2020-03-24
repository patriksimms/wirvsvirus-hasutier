import { Body, Controller, Get, HttpService, Post, Render, UseGuards, Request } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';
import { AuthenticatedGuard } from '../../backend/auth/authenticated.guard';

@Controller('create-offer')
export class CreateOfferController {

  @Get()
  @Render('createOffer')
  async index(@Request() req) {
    const ser = new BeConnectionService(new HttpService());
    const services = await ser.getAllServices();
    const animals = await ser.getAllAnimals();

    let logIn = false;

    if(req.user != undefined){
      logIn = true;
    }

    return { 'animals': animals, 'services': services, loggedIn: logIn };
  }

  @Post('/submit')
  @UseGuards(AuthenticatedGuard)
  async submit(@Body() body, @Request() req) {
    const ser = new BeConnectionService(new HttpService());

    console.log(JSON.stringify(body));

    const animalList = [];
    const serviceList = [];

    for (const elem in body) {
      if (elem.startsWith('offerAnimal')) {
        animalList.push({ name: elem.substring(11, elem.length) });
      } else if (elem.startsWith('offerService')) {
        serviceList.push({ name: elem.substring(12, elem.length) });
      }
    }

    console.log('AnimalList: ' + animalList);
    console.log('ServiceList: ' + serviceList);

    const offer = {
      'animalTypes': animalList,
      'serviceTypes': serviceList,
      'description': body.offerDescription,
      'plz': body.offerPLZ,
      'owner': req.user.id
    };

    let res;

    try {
      res = await ser.addOffer(offer);
      console.log(res);
    } catch (e) {
      console.log('Error at Adding Offer');
      //TODO ERRORHANDLING
    }
  }
}
