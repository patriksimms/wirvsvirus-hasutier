import { Controller, Get } from '@nestjs/common';
import { ServiceService } from './serviceService';
import { ServiceType } from './services.entity';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get('types')
  async getAllServiceTypes(): Promise<ServiceType[]> {
    return this.serviceService.getAllServiceTypes();
  }
}