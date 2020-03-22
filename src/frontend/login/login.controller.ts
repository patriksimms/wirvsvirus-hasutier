import { Controller, Get, Render, Post, Body, Param, Res, Redirect, HttpService } from '@nestjs/common';
import { BeConnectionService } from 'src/services/beConnectionService';


@Controller('login')
export class LoginController {

  @Get()
  @Render('login')
  index() {
    return {};
  }

  @Post('/submit')
  @Render('userprofile')
  async submit(@Body() dto){

    const ser = new BeConnectionService(new HttpService());

    const response = await ser.loginUser(dto);

    if(response && response.accessToken) {
      return response;
    } else { 
      // Show failed login screen or something
    }
  }
}

