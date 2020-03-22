import { Test, TestingModule } from '@nestjs/testing';
import { CreateAnimalController } from './create-animal.controller';

describe('CreateAnimal Controller', () => {
  let controller: CreateAnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateAnimalController],
    }).compile();

    controller = module.get<CreateAnimalController>(CreateAnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
