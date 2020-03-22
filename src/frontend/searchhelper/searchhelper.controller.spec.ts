import { Test, TestingModule } from '@nestjs/testing';
import { SearchhelperController } from './searchhelper.controller';

describe('Search Controller Helper', () => {
  let controller: SearchhelperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchhelperController],
    }).compile();

    controller = module.get<SearchhelperController>(SearchhelperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
