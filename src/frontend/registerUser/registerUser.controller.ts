import { Body, Controller, Get, HttpService, Post, Render } from '@nestjs/common';
import { BeConnectionService} from '../../services/beConnectionService';

@Controller('register')
export class RegisterUserController {

  @Get()
  @Render('register')
  index() {
    return {};
  }

  @Post("/submit")
  async submit(@Body() body) {
    const ser = new BeConnectionService(new HttpService());

    const user = {
      "email": body.emailRegister,
      "name": body.firstNameRegister,
      "lastName": body.lastNameRegister,
      "phone": body.phoneNumberRegister,
      "isVerified": false,
      "description": body.descriptionRegister,
      "birthDate": body.birthDateRegister,
      "hashedPassword": body.passwordRegister
    };

    let res;

    try {
      res = await ser.registerUser(user);
    } catch (e) {
      console.log("Error at User Register")
      //TODO ERRORHANDLING
    }
  }

}

