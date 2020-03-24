import { Controller, Get, Render, Request } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('homepage')
  root(@Request() req) {
    let logIn = false;

    if(req.user != undefined){
      logIn = true;
    }

    return {loggedIn: logIn};
  }

}

