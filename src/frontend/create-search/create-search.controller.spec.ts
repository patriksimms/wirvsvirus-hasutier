import { Test, TestingModule } from '@nestjs/testing';
import { CreateSearchController } from './create-search.controller';

describe('CreateSearch Controller', () => {
  let controller: CreateSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateSearchController],
    }).compile();

    controller = module.get<CreateSearchController>(CreateSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
