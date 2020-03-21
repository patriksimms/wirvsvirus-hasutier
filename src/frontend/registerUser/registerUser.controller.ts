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

    console.log("BODY: " + JSON.stringify(body));

    const user = {
      "email": body.emailRegister,
      "name": body.firstNameRegister,
      "lastName": body.lastNameRegister,
      "phone": body.phoneNumberRegister,
      "isVerified": false,
      "description": "",
      "birthDate": "01.01.2020",
      "hashedPassword": body.passwordRegister
    };

    console.log("User: " + JSON.stringify(user));

    let res;

    try {
      res = await ser.registerUser(user);
    } catch (e) {
      console.log("Error at User Register")
      //TODO ERRORHANDLING
    }
  }

}

