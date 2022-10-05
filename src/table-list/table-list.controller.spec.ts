import { Test, TestingModule } from '@nestjs/testing';
import { TableListController } from './table-list.controller';
import { TableListService } from './table-list.service';

describe('TableListController', () => {
  let controller: TableListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableListController],
      providers: [TableListService],
    }).compile();

    controller = module.get<TableListController>(TableListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
