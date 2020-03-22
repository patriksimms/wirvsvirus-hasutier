import { Controller, Get, HttpService, Param, Query, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';
import { User } from '../../backend/user/user.entity';


@Controller('searchHelper')
export class SearchhelperController {

  @Get()
  @Render('searchHelper')
  async index() {
    const ser = new BeConnectionService(new HttpService());
    const animals = await ser.getAllAnimals();
    const services = await ser.getAllServices();
    let offers = await ser.getAllOffers();

    if (offers == undefined) {
      offers = [];
    }
    return { 'animals': animals, 'services': services, 'helpers': offers };
  }


  /**
   * Filter try not sure
   * @param query filter data
   */
  @Get()
  async findByFilter(@Query() query) {
    //Hardcode it
    const ser = new BeConnectionService(new HttpService());
    const animals = await ser.getAllAnimals();
    const services = await ser.getAllServices();
    const offers = await ser.getAllOffers();

    const offerArr = [];
    let offer;
    let breaker;
    let bool;
    let age;
    for (let i = 0; i <= offers.length; i++) {
      bool = true;
      offer = offers[i];

      if (query.species != null) {
        for (let j = 0; j <= offer.AnimalType && !breaker; i++) {
          if (query.species == offer.AnimalType[j]) {
            bool = true;
            breaker = true;
          }
        }
      }
      breaker = false;
      if (bool && query.service != null) {
        for (let j = 0; j <= offer.AnimalType && !breaker; i++) {
          if (query.service == offer.ServiceType[j]) {
            bool = true;
            breaker = true;
          }
        }
      }
      if (bool && query.PLZ != null) {
        bool = (query.PLZ == offer.plz);
      }
      if (bool && query.begin != null && query.end != null) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        age = _calculateAge(offer.user.birthDate);
        bool = ((query.begin <= age) && (query.end >= age));
      }
      if (bool) {

        offerArr.push(offer);
      }

    }


    return { 'animals': animals, 'services': services, 'helpers': offerArr };
  }


}


function _calculateAge(birthday) { // birthday is a date
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
