import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceType } from './services.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  constructor(@InjectRepository(ServiceType) private serviceTypeRepository: Repository<ServiceType>) {}

  async getAllServiceTypes(): Promise<ServiceType[]> {
    return this.serviceTypeRepository.find();
  }
}