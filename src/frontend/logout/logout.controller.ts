import { Controller, Get, Render } from '@nestjs/common';

@Controller('logout')
export class LogoutController {

  @Get()
  @Render('logout')
  index() {
    return {};
  }
}
