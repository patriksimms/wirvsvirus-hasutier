import { Controller, Post, Body, UseGuards, Request, Get, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../user/user.entity';
import { LoginGuard } from './login.guard';
import { AuthenticatedGuard } from './authenticated.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    

    // Expects a json body with email and password like this { username : "wurst", password: "bla"}
    @UseGuards(LoginGuard)
    @Post('login')
    async login(@Request() req, @Res() res : Response) {
        res.redirect("/profile")
    }

    @Post('register')
    async register(@Body() user: User): Promise<any> {
      return this.authService.register(user);
    } 
    
    @UseGuards(AuthenticatedGuard)
    @Get('secretroute')
    async secretMethod(@Request() req) {
        return req.user;
    }
}