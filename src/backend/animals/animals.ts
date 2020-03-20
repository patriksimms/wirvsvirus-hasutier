import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AnimalController {
  @Get("animals")
  test(): string {
    return "Test";
  }
}