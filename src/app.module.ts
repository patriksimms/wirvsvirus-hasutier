import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnimalController } from './backend/animal/animal.controller';
import { AnimalService } from './backend/animal/animal.service';
import { UserController } from './backend/user/user.controller';
import { UserService } from './backend/user/user.service';
import { RegisterController } from './backend/user/user.controller';
import { AppService } from './app.service';
import { RegisterUserController } from './frontend/registerUser/registerUser.controller';
import { LoginController } from './frontend/login/login.controller';
import { SearchofferController } from './frontend/search/searchoffer.controller';
import { SearchhelperController } from './frontend/searchhelper/searchhelper.controller';
import { ProfileController } from './frontend/profile/profile.controller';
import { CreateOfferController } from './frontend/create-offer/create-offer.controller';
import { CreateSearchController } from './frontend/create-search/create-search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './backend/user/user.entity';
import { AuthModule } from './backend/auth/auth.module';
import { Animal } from './backend/animal/animal.entity';
import { UserModule } from './backend/user/user.module';
import { AnimalModule } from './backend/animal/animal.module';
import { AnimalType } from './backend/animal/animalType.entity';
import { ServiceType } from './backend/services/services.entity';
import { ServiceController } from './backend/services/serviceController';
import { ServiceService } from './backend/services/serviceService';
import { CreateAnimalController } from './frontend/create-animal/create-animal.controller';
import { MulterModule } from '@nestjs/platform-express';
import { OfferModule } from './backend/offer/offer.module';
import { SearchModule } from './backend/search/search.module';
import { LogoutController } from './frontend/logout/logout.controller';
import { SearchService } from './backend/search/search.service';
import { Search } from './backend/search/search.entity';
import { Offer } from './backend/offer/offer.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    TypeOrmModule.forFeature([User, Animal, AnimalType, ServiceType, Search, Offer]),
    UserModule,
    HttpModule,
    AnimalModule,
    MulterModule.register({
      dest: './public/uploads/',
    }),
    OfferModule,
    SearchModule,
  ],

  controllers: [AppController, AnimalController, UserController, RegisterController, AppController, ProfileController, RegisterUserController, LoginController, LogoutController, SearchofferController, SearchhelperController, CreateOfferController, CreateSearchController, ServiceController, CreateAnimalController],
  providers: [AppService, AnimalService, UserService, ServiceService, SearchService],
  exports: [TypeOrmModule],
})
export class AppModule {
}
