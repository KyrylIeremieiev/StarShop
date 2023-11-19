import { Test, TestingModule } from '@nestjs/testing';
import { StarCartService } from './star-cart.service';

describe('StarCartService', () => {
  let service: StarCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarCartService],
    }).compile();

    service = module.get<StarCartService>(StarCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
