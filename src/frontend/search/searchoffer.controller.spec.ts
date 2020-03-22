import { Test, TestingModule } from '@nestjs/testing';
import { SearchofferController } from './searchoffer.controller';

describe('Search Controller Offer', () => {
  let controller: SearchofferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchofferController],
    }).compile();

    controller = module.get<SearchofferController>(SearchofferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
