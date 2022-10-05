import { Test, TestingModule } from '@nestjs/testing';
import { TableListService } from './table-list.service';

describe('TableListService', () => {
  let service: TableListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableListService],
    }).compile();

    service = module.get<TableListService>(TableListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
