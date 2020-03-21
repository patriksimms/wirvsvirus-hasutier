import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnimalController } from './backend/animal/animalController';
import { AnimalService } from './backend/animal/animalService';
import { UserController } from './backend/user/userController';
import { UserService } from './backend/user/userService';
import { RegisterController } from './backend/user/userController';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './backend/user/user.entity';
import { AuthModule } from './backend/auth/auth.module';
import { Animal } from './backend/animal/animal.entity';
import { UserModule } from './backend/user/user.module';
import { NoteModule } from './backend/notes/note.module';
import { AnimalModule } from './backend/animal/animal.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    TypeOrmModule.forFeature([User, Animal]),
    UserModule,
    NoteModule,
    AnimalModule,

  ],

  controllers: [AppController, AnimalController, UserController, RegisterController],
  providers: [AppService, AnimalService, UserService],
  exports: [TypeOrmModule],
})
export class AppModule {
}
