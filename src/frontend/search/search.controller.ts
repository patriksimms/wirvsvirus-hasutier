import { Controller, Get, Render } from '@nestjs/common';

@Controller('search')
export class SearchController {

  @Get()
  @Render('search')
  index() {
    return {};
  }
}
