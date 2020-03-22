import { Controller, Get, HttpService, Param, Render } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('userprofile')
export class ProfileController {

  @Get(':uid')
  @Render('userprofile')
  async index(@Param() params) {
    const ser = new BeConnectionService(new HttpService());

    console.log(params.uid);

    const user = await ser.getUserData(params.uid);
    const userImage = await ser.getUserPicture(params.uid);
    const animals = await ser.getAnimalsForUser(params.uid);

    console.log(user);

    return { user: user, userImage: userImage, animals: animals };
  }
}
