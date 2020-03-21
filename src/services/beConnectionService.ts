import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeConnectionService {

  constructor(private httpService: HttpService) {

    // getAllAnimals(): Observable<AxiosResponse<>>
  }
}