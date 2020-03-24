import { Controller, Get, Render, UseGuards, Request, Param, HttpService, Response, Res } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/backend/auth/authenticated.guard';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('userprofile')
export class ProfileController {

  @Get()
  @UseGuards(AuthenticatedGuard)
  @Render('userprofile')
  async easyIndex(@Res() res, @Request() req) {

    res.redirect("/userprofile/" + req.user.id);
  }

  @Get(':uid')
  @Render('userprofile')
  async index(@Param() params, @Request() req) {

    const ser = new BeConnectionService(new HttpService());

    let logIn = false;

    if(req.user != undefined){
      logIn = true;
    }

    const user = await ser.getUserData(params.uid);
    let animals;
    let image;
    try {
      animals = await ser.getAnimalsForUser(params.uid);
    } catch (e) {
    }

    try {
      image = await ser.getUserPicture(params.uid);
      console.log(image);
    } catch (e) {

    }

    console.log(user);

    return { user: user, animals: animals, image: image, loggedIn: logIn };
  }

  @UseGuards(AuthenticatedGuard)
  index2(@Request() req) {
    return req.user;
  }
}
