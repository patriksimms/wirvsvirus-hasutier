import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('login')
  root() {
    return { message: 'Hello world!' };
  }
}
