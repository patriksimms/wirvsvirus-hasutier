import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { response } from 'express';

@Injectable()
export class BeConnectionService {

  constructor(private httpService: HttpService) {

  }

  async getAllAnimals(){
    return this.httpService.get('http://localhost:3000/animal/types').pipe(map(response => response.data)).toPromise();
  }
}
