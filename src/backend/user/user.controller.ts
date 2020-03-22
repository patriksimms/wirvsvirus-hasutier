import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Res,
  BadRequestException,
  UseInterceptors, UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('profile')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get(':id')
  async getProfile(@Param() params): Promise<any> {
    const user = await this.userService.getUser(params.id);

    if (user === undefined) {
      throw new BadRequestException('user id not found');
    }
    return user;
  }

  @Post()
  async createUser(@Body() params: User): Promise<User> {
    return await this.userService.createUser(params);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    this.userService.deleteUser(params);
  }

  @Post(':userid/upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@Param('userid') userId, @UploadedFile()  file) {
    this.userService.addImageToUser(userId, file.filename);
    console.log(userId);
    console.log('file: ' + file.filename);
  }

  @Get(':userId/image')
  async getUserImage(@Param('userId') userId, @Res() res) {
    let user = await this.userService.getUser(userId);
    if (user.imageName == undefined) {
      throw new BadRequestException('user has no image');
    }
    console.log(user.id);
    res.sendFile(user.imageName, { root: 'uploads' });
  }
}

@Controller()
export class RegisterController {
  constructor(private readonly userService: UserService) {
  }
}
