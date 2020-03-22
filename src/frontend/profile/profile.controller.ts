import { Controller, Get, Render, UseGuards, Request } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/backend/auth/authenticated.guard';

@Controller('profile')
export class ProfileController {

  @Get()
  @Render('userprofile')
  @UseGuards(AuthenticatedGuard)
  index(@Request() req) {
    return req.user;
  }
}