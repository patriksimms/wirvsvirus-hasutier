import { Controller, Get, Render } from '@nestjs/common';

@Controller('register')
export class RegisterController {

  @Get()
  @Render('register')
  index() {
    return {};
  }
}

