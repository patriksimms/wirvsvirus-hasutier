import { Body, Controller, Get, HttpService, Post, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';
import { elementAt } from 'rxjs/operators';

@Controller('create-offer')
export class CreateOfferController {

  @Get()
  @Render('createOffer')
  async index() {
    const ser = new BeConnectionService(new HttpService());
    const services = await ser.getAllServices();
    const animals = await ser.getAllAnimals();
    return { 'animals': animals, 'services': services };
  }

  @Post('/submit')
  async submit(@Body() body) {
    const ser = new BeConnectionService(new HttpService());

    console.log(JSON.stringify(body));

    const animalList = [];
    const serviceList = [];

    for (const elem in body) {
      if (elem.startsWith('offerAnimal')) {
        animalList.push(elem.substring(11, elem.length));
      } else if (elem.startsWith('offerService')) {
        serviceList.push(elem.substring(12, elem.length));
      }
    }

    console.log('AnimalList: ' + animalList);
    console.log('ServiceList: ' + serviceList);

    //TODO add relevant Data when API is ready
    const offer = {
      'animalList': animalList,
      'serviceList': serviceList,
      'description': body.offerDescription
      //PLZ für Angebot
    };

    let res;

    try {
      res = await ser.addOffer(offer);
    } catch (e) {
      console.log('Error at Adding Offer');
      //TODO ERRORHANDLING
    }
  }
}
