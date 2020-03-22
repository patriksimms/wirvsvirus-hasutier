import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../user/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    

    // Expects a json body with email and password like this { username : "wurst", password: "bla"}
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return req.user;
    }

    @Post('register')
    async register(@Body() user: User): Promise<any> {
      return this.authService.register(user);
    } 
    
    @UseGuards(AuthGuard('jwt'))
    @Get('secretroute')
    async secretMethod(@Request() req) {
        return req.user;
    }
}