import { Module } from '@nestjs/common';
import { TableListService } from './table-list.service';
import { TableListController } from './table-list.controller';
import { TableList } from './entities/table-list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([TableList])],
  controllers: [TableListController],
  providers: [TableListService]
})
export class TableListModule {}
