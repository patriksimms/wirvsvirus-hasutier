import { Controller, Get, Render } from '@nestjs/common';

@Controller('register')
export class RegisterUserController {

  @Get()
  @Render('register')
  index() {
    return {};
  }
}

