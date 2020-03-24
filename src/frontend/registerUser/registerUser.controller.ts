import {
  Body,
  Controller,
  Get,
  HttpService,
  Post,
  Render,
  Response,
  Request,
  UploadedFile,
  UseInterceptors, Res,
} from '@nestjs/common';
import { BeConnectionService } from '../../services/beConnectionService';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('register')
export class RegisterUserController {

  @Get()
  @Render('register')
  index() {
    return {};
  }

  @Post('/submit')
  @UseInterceptors(FileInterceptor('fileRegister'))
  async submit(@Body() body, @UploadedFile() file, @Res() response) {
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

    console.log(file);

    let res;
    let res2;

    try {
      res = await ser.registerUser(user);
      res2 = await ser.addUserPicture(res.id, file);

      response.redirect("/login")
    } catch (e) {
      console.log('Error at User Register');
      console.log(e);
      //TODO ERRORHANDLING
    }
  }

}

