import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTableListDto } from './dto/create-table-list.dto';
import { UpdateTableListDto } from './dto/update-table-list.dto';
import { TableList } from './entities/table-list.entity';

@Injectable()
export class TableListService {
  constructor(
    @InjectRepository(TableList)
    private readonly tableList: Repository<TableList>,
  ){}
  create(createTableListDto: CreateTableListDto) {
    return this.tableList.save(createTableListDto);
  }

  findAll() {
    return this.tableList.find();
  }

  findOne(tableId: number) {
    return this.tableList.findOneBy({tableId});
  }

  update(id: number, updateTableListDto: UpdateTableListDto) {
    return `This action updates a #${id} tableList`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableList`;
  }
}
