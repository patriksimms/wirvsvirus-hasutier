import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimalService {

  findOneAnimal(id: string): string {
    return id.valueOf();
  }
}