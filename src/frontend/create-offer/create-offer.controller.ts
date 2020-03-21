import { Controller, Get, Render } from '@nestjs/common';

@Controller('create-offer')
export class CreateOfferController {

  @Get()
  @Render('createOffer')
  index() {
    return {};
  }
}
