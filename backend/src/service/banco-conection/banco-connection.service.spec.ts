import { Test, TestingModule } from '@nestjs/testing';
import { BancoConnectionService } from './banco-connection.service';

describe('BancoConnectionService', () => {
  let service: BancoConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BancoConnectionService],
    }).compile();

    service = module.get<BancoConnectionService>(BancoConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
