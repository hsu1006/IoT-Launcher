import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TableListService } from './table-list.service';
import { CreateTableListDto } from './dto/create-table-list.dto';
import { UpdateTableListDto } from './dto/update-table-list.dto';

@Controller('table-list')
export class TableListController {
  constructor(private readonly tableListService: TableListService) {}

  @Post()
  create(@Body() createTableListDto: CreateTableListDto) {
    return this.tableListService.create(createTableListDto);
  }

  @Get()
  findAll() {
    return this.tableListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') tableId: string) {
    return this.tableListService.findOne(+tableId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableListDto: UpdateTableListDto) {
    return this.tableListService.update(+id, updateTableListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableListService.remove(+id);
  }
}
