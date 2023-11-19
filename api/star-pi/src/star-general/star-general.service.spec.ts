import { Test, TestingModule } from '@nestjs/testing';
import { StarGeneralService } from './star-general.service';

describe('StarGeneralService', () => {
  let service: StarGeneralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarGeneralService],
    }).compile();

    service = module.get<StarGeneralService>(StarGeneralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
