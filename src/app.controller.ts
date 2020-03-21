import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('userprofile')
  root() {
    return {message: "hello world"};
  }
}

