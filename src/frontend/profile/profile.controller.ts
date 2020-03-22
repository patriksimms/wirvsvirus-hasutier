import { Controller, Get, Render } from '@nestjs/common';

@Controller('profile')
export class ProfileController {

  @Get(':uid')
  @Render('userprofile')
  index() {
    // TODO fetch user data
    const dummyJson = {
      id: 2,
      email: 'max@mustermann.de',
      name: 'max',
      lastname: 'mustermann',
      phone: 124112311,
      image: 'assets/img/alexander-else-foto.jpg',
      // /animal/user/uid
    };
    return {};
  }
}