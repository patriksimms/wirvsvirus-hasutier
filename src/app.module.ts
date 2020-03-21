import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnimalController } from './backend/animal/animalController';
import { AnimalService } from './backend/animal/animalService';
import { UserController } from './backend/user/userController';
import { UserService } from './backend/user/userService';
import { RegisterController } from './backend/user/userController';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './backend/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([user])
  ],


  controllers: [AppController, AnimalController, UserController, RegisterController],
  providers: [AppService, AnimalService, UserService],
  exports: [TypeOrmModule]
})
export class AppModule { }
