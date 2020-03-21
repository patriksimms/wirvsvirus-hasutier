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

import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'cloudsql/crossinnovation-1573486159594:europe-west1:wvv-haustiere',
      port: 5432,
      username: 'postgres',
      password: 'pw',
      database: 'wwv',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
  ],


  controllers: [AppController, AnimalController, UserController, RegisterController],
  providers: [AppService, AnimalService, UserService],
  exports: [TypeOrmModule]
})
export class AppModule { }
