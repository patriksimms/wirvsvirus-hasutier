import { Controller, Get, Render, UseGuards, Request, Param, HttpService } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/backend/auth/authenticated.guard';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('userprofile')
export class ProfileController {

  @Get()
  @Render('userprofile')
  async index2(@Param() params) {
    const ser = new BeConnectionService(new HttpService());

    console.log(params.uid);

    const user = await ser.getUserData(params.uid);
    const userImage = await ser.getUserPicture(params.uid);
    const animals = await ser.getAnimalsForUser(params.uid);

    console.log(user);

    return { user: user, userImage: userImage, animals: animals };


  }

  @UseGuards(AuthenticatedGuard)
  index(@Request() req) {
    return req.user;
  }
}