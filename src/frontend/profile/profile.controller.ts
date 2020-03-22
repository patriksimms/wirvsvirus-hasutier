import { Controller, Get, Render, UseGuards, Request, Param, HttpService } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/backend/auth/authenticated.guard';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('userprofile')
export class ProfileController {

  @Get(":uid")
  @Render('userprofile')
  async index(@Param() params) {
    const ser = new BeConnectionService(new HttpService());

    console.log(params.uid);

    const user = await ser.getUserData(params.uid);
    let animals;
    let image;
    try {
      animals = await ser.getAnimalsForUser(params.uid);
      image = await ser.getUserPicture(params.uid);
      console.log(image);
    } catch (e) {
    }

    console.log(user);

    return { user: user, animals: animals, image: image };
  }

  @UseGuards(AuthenticatedGuard)
  index2(@Request() req) {
    return req.user;
  }
}
