import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class BeConnectionService {


  constructor(private httpService: HttpService) {

  }

  async getAllAnimals(){
    return this.httpService.get('http://localhost:3000/animal/types').pipe(map(response => response.data)).toPromise();
  }

  async getAllServices(){
    return this.httpService.get('http://localhost:3000/service/types').pipe(map(response => response.data)).toPromise();
  }

  async registerUser(data : any){
    const response = await this.httpService.post('http://localhost:3000/register', data).pipe(map(response => response.status)).toPromise();

    return response;
  }

  async addOffer(data : any){
    //TODO AFTER API HAS ENDPOINT
  }

  async addSearch(data : any){
    //TODO AFTER API HAS ENDPOINT
  }

}
