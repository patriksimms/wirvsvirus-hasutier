import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserProfileControllerController } from './user-profile-controller/user-profile-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, UserProfileControllerController],
  providers: [AppService],
})
export class AppModule {}
