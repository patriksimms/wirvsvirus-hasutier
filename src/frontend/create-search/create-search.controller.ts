import { Controller, Get, Render } from '@nestjs/common';

@Controller('create-search')
export class CreateSearchController {

  @Get()
  @Render('createSearch')
  index() {
    return {};
  }
}
