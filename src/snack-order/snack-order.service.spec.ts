import { Test, TestingModule } from '@nestjs/testing';
import { SnackOrderService } from './snack-order.service';

describe('SnackOrderService', () => {
  let service: SnackOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnackOrderService],
    }).compile();

    service = module.get<SnackOrderService>(SnackOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
