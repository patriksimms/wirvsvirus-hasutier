import { Body, Controller, Get, HttpService, Post, Render, Response, Request } from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';

@Controller('register')
export class RegisterUserController {

  @Get()
  @Render('register')
  index() {
    return {};
  }

  @Post('/submit')
  async submit(@Body() body) {
    const ser = new BeConnectionService(new HttpService());

    const user = {
      'email': body.emailRegister,
      'name': body.firstNameRegister,
      'lastName': body.lastNameRegister,
      'phone': body.phoneNumberRegister,
      'isVerified': false,
      'description': body.descriptionRegister,
      'birthDate': body.birthDateRegister,
      'hashedPassword': body.passwordRegister,
    };

    let res;
    let res2;

    try {
      res = await ser.registerUser(user);
      res2 = await ser.addUserPicture(res.id, body.fileRegister);
    } catch (e) {
      console.log('Error at User Register');
      console.log(e);
      //TODO ERRORHANDLING
    }
  }

}

