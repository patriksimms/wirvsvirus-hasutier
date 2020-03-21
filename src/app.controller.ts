import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('createSearch')
  root() {
    return {message: "hello world"};
  }
}
