import { Module } from '@nestjs/common';
import { TableTrackService } from './table-track.service';
import { TableTrackController } from './table-track.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableTrack } from './entities/table-track.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TableTrack])],
  controllers: [TableTrackController],
  providers: [TableTrackService]
})
export class TableTrackModule {}
