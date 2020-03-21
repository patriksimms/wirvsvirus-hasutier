import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileControllerController } from './user-profile-controller.controller';

describe('UserProfileController Controller', () => {
  let controller: UserProfileControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserProfileControllerController],
    }).compile();

    controller = module.get<UserProfileControllerController>(UserProfileControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
