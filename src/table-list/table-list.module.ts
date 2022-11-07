import { Module } from '@nestjs/common';
import { TableListService } from './table-list.service';
import { TableListController } from './table-list.controller';
import { TableList } from './entities/table-list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/booking/entities/booking.entity';
import { TableTrack } from 'src/table-track/entities/table-track.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TableList, Booking, TableTrack,])],
  controllers: [TableListController],
  providers: [TableListService]
})
export class TableListModule { }
