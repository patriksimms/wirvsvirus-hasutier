import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BeConnectionService {

  constructor(private httpService: HttpService) {

  }

  getAllAnimals() {
    return this.httpService.get('http://localhost/animals/types').pipe(map(response => response.data))
  }
}