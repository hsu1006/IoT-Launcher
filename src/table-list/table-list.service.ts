import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { table } from 'console';
import { Booking } from 'src/booking/entities/booking.entity';
import { TableTrack } from 'src/table-track/entities/table-track.entity';
import { Repository } from 'typeorm';
import { CreateTableListDto } from './dto/create-table-list.dto';
import { UpdateTableListDto } from './dto/update-table-list.dto';
import { TableList } from './entities/table-list.entity';

@Injectable()
export class TableListService {
  constructor(
    @InjectRepository(TableList)
    private readonly tableList: Repository<TableList>,
    @InjectRepository(Booking)
    private readonly booking: Repository<Booking>,
    @InjectRepository(TableTrack)
    private readonly tableTrack: Repository<TableTrack>,
  ) { }
  create(createTableListDto: CreateTableListDto) {
    return this.tableList.save(createTableListDto);
  }

  findAll() {
    return this.tableList.find();
  }

  findOne(tableId: number) {
    return this.tableList.findOneBy({ tableId });
  }

  async update(id: number, updateTableListDto: UpdateTableListDto) {
    try {
      const tableList = await this.tableList.findOneByOrFail({ tableId: id });
      return this.tableList.save({ status: updateTableListDto.status, tableId: tableList.tableId });
    } catch (e) {
      throw new NotFoundException();
    }

  }
  async remove(id: number) {
    try {
      const tableList = await this.tableList.findOneByOrFail({ tableId: id });
      const booking = await this.booking.findBy({tableId: tableList});
      const tableTrack = await this.tableTrack.findBy({tableId:tableList});
      await this.booking.remove(booking);
      await this.tableTrack.remove(tableTrack);
      return this.tableList.remove([tableList]);
    } catch (e) {
      console.log(e);
      throw new NotFoundException();
    }
  }
}
