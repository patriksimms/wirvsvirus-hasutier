import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnimalController } from './backend/animal/animalController';
import { AnimalService } from './backend/animal/animalService';
import { UserController } from './backend/user/userController';
import { UserService } from './backend/user/userService';
import { RegisterController } from './backend/user/userController';
import { AppService } from './app.service';
import { RegisterUserController } from './frontend/registerUser/registerUser.controller';
import { LoginController } from './frontend/login/login.controller';
import { SearchController } from './frontend/search/search.controller';
import { ProfileController } from './frontend/profile/profile.controller';
import { CreateOfferController } from './frontend/create-offer/create-offer.controller';
import { CreateSearchController } from './frontend/create-search/create-search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './backend/user/user.entity';
import { AuthModule } from './backend/auth/auth.module';
import { Animal } from './backend/animal/animal.entity';
import { UserModule } from './backend/user/user.module';
import { NoteModule } from './backend/notes/note.module';
import { AnimalModule } from './backend/animal/animal.module';
import { AnimalType } from './backend/animal/animalType.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    TypeOrmModule.forFeature([User, Animal, AnimalType]),
    UserModule,
    NoteModule,
    AnimalModule,

  ],

  controllers: [AppController, AnimalController, UserController, RegisterController, AppController, ProfileController, RegisterUserController, LoginController, SearchController, CreateOfferController, CreateSearchController],
  providers: [AppService, AnimalService, UserService],
  exports: [TypeOrmModule],
})
export class AppModule {
}
