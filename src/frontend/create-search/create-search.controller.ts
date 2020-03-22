import { Body, Controller, Get, HttpService, Post, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('create-search')
export class CreateSearchController {

  @Get()
  @Render('createSearch')
  async index() {
    const ser = new BeConnectionService(new HttpService());
    const services = await ser.getAllServices();
    return { 'services': services };
  }

  @Post("/submit")
  async submit(@Body() body){
    const ser = new BeConnectionService(new HttpService());

    console.log(JSON.stringify(body));

    const serviceList = [];

    for (const elem in body) {
      if (elem.startsWith('offerService')) {
        serviceList.push(elem.substring(12, elem.length));
      }
    }

    console.log('ServiceList: ' + serviceList);

    //TODO add relevant Data when API is ready
    const offer = {
      'serviceList': serviceList,
      'description': body.searchDescription,
      'startDate': body.searchDate,
      'duration': body.searchDuration
    };

    let res;

    try {
      res = await ser.addSearch(offer);
    } catch (e) {
      console.log('Error at Adding Offer');
      //TODO ERRORHANDLING
    }
  }
}
