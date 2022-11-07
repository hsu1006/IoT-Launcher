import { Test, TestingModule } from '@nestjs/testing';
import { SnackOrderController } from './snack-order.controller';
import { SnackOrderService } from './snack-order.service';

describe('SnackOrderController', () => {
  let controller: SnackOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnackOrderController],
      providers: [SnackOrderService],
    }).compile();

    controller = module.get<SnackOrderController>(SnackOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
