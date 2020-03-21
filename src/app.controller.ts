import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('register')
  root() {
    return { message: 'Hello world!' };
  }
}
