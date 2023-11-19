import { Test, TestingModule } from '@nestjs/testing';
import { StarCartController } from './star-cart.controller';

describe('StarCartController', () => {
  let controller: StarCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarCartController],
    }).compile();

    controller = module.get<StarCartController>(StarCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
