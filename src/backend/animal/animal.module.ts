import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animal.entity';
import { AnimalController } from './animalController';
import { AnimalService } from './animalService';
import { AnimalType } from './animalType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animal, AnimalType])],
  controllers: [AnimalController],
  providers: [AnimalService],
  exports: [AnimalService],
})
export class AnimalModule {
}
