import { Body, Controller, Get, HttpService, Post, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('searchOffer')
export class SearchofferController {

  @Get()
  @Render('searchOffer')
async index() {
    const ser = new BeConnectionService(new HttpService());
    const animals = await ser.getAllAnimals();
    const services = await ser.getAllServices();
    const search = await ser.getAllSearches();




    return { 'animals': animals, 'services' : services, 'offers':search };
  }

/*
  @Post("/submit")
  async submit(@Body() body) {
    const ser = new BeConnectionService(new HttpService());

    const filteroffer = {
      "plz": body.PLZ,
      "radius": body.radius,
      "species": body.species,
      "gender": body.gender,
    //  "isVerified": false,
      "service": body.service,
      "agestart": body.agestart,
      "ageend": body.agestart,
      "breed": body.breed,
      "heightstart": body.heightstart,
      "heightend": body.heightend,
      "weightstart": body.weightstart,
      "weightend": body.weightend,
    };

    let res;

    try {
      res = await ser.filterOffer(filteroffer); //not implemented
    } catch (e) {
      console.log("Error at User Register")
      //TODO ERRORHANDLING
    }
  }*/
}
