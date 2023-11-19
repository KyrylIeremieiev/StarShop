import { Test, TestingModule } from '@nestjs/testing';
import { StarGeneralController } from './star-general.controller';

describe('StarGeneralController', () => {
  let controller: StarGeneralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarGeneralController],
    }).compile();

    controller = module.get<StarGeneralController>(StarGeneralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
