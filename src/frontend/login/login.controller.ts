import { Controller, Get, Render, Post, Body } from '@nestjs/common';

@Controller('login')
export class LoginController {


  @Get()
  @Render('login')
  index() {
    return {};
  }

  @Post('/submit')
  submit(@Body() dto){

    console.log(dto);
  }
}

