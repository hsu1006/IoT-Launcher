import { Test, TestingModule } from '@nestjs/testing';
import { TableTrackController } from './table-track.controller';
import { TableTrackService } from './table-track.service';

describe('TableTrackController', () => {
  let controller: TableTrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableTrackController],
      providers: [TableTrackService],
    }).compile();

    controller = module.get<TableTrackController>(TableTrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
