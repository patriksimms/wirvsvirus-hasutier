import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterUserController } from './frontend/registerUser/registerUser.controller';
import { LoginController } from './frontend/login/login.controller';
import { SearchController } from './frontend/search/search.controller';
import { ProfileController } from './frontend/profile/profile.controller';
import { CreateOfferController } from './frontend/create-offer/create-offer.controller';
import { CreateSearchController } from './frontend/create-search/create-search.controller';

@Module({
  imports: [],
  controllers: [AppController, ProfileController, RegisterUserController, LoginController, SearchController, CreateOfferController, CreateSearchController],
  providers: [AppService],
})
export class AppModule {}
