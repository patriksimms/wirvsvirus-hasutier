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

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    AuthModule
  ],


  controllers: [AppController, AnimalController, UserController, RegisterController],
  providers: [AppService, AnimalService, UserService],
  exports: [TypeOrmModule]
})
export class AppModule { }
