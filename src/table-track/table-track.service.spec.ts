import { Test, TestingModule } from '@nestjs/testing';
import { TableTrackService } from './table-track.service';

describe('TableTrackService', () => {
  let service: TableTrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableTrackService],
    }).compile();

    service = module.get<TableTrackService>(TableTrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
