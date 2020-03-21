import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './userService'
import { user } from './user.entity';

@Controller('profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getProfile(@Param() params): user {
    let bums = this.userService.getUser(params);
    console.log(bums);
    return bums;
  }

  @Post()
  createUser(@Body() params: user): boolean {
    return this.userService.createUser(params);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    this.userService.deleteUser(params);
  }
}

@Controller()
export class RegisterController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  validateUser(@Body() params: user): boolean {
    return this.userService.validateUser(params);
  }

  @Post('register')
  createUser(@Body() params: user): boolean {
    return this.userService.createUser(params);
  }
}