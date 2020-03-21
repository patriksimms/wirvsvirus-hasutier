import { Controller, Get, Post, Delete, Body, Param, Res, HttpStatus, BadRequestException } from '@nestjs/common';
import { UserService } from './userService';
import { User } from './user.entity';

@Controller('profile')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get(':id')
  async getProfile(@Param() params): Promise<any> {
    let user = await this.userService.getUser(params.id);

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
}

@Controller()
export class RegisterController {
  constructor(private readonly userService: UserService) {
  }

  @Post('login')
  validateUser(@Body() params: User): boolean {
    return this.userService.validateUser(params);
  }

  @Post('register')
  async createUser(@Body() params: User): Promise<User> {
    console.log('register' + params);
    return this.userService.createUser(params);
  }
}
