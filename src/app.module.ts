import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnimalController } from './backend/animal/animalController';
import { AnimalService} from './backend/animal/animalService';
import { UserController } from './backend/user/userController';
import { UserService } from './backend/user/userService';
import { RegisterController } from './backend/user/userController';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AnimalController, UserController, RegisterController],
  providers: [AppService, AnimalService, UserService],
})
export class AppModule {}
