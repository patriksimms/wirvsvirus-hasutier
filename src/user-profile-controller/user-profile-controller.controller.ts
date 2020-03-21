import { Controller, Get, Render } from '@nestjs/common';

@Controller('user-profile')
export class UserProfileControllerController {

  @Get()
  @Render('userprofile')
  index() {



    const dummyJson = {
      id: 2,
      email: "max@mustermann.de",
      name: "max",
      lastname: "mustermann",
      phone: 124112311,
      image: "assets/img/alexander-else-foto.jpg"
    };
    return {};
  }
}
