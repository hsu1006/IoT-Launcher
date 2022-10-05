import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TableTrackService } from './table-track.service';
import { CreateTableTrackDto } from './dto/create-table-track.dto';
import { UpdateTableTrackDto } from './dto/update-table-track.dto';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';

@Controller('table-track')
export class TableTrackController {
  constructor(private readonly tableTrackService: TableTrackService) {}

  @MessagePattern('tableTrack/status')
  async getLogsFromNotifications(
    @Payload() data: Object,
    @Ctx() context: MqttContext,
  ) {
    console.log(data);
  }

  @Post()
  create(@Body() createTableTrackDto: CreateTableTrackDto) {
    return this.tableTrackService.create(createTableTrackDto);
  }

  @Get()
  findAll() {
    return this.tableTrackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableTrackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableTrackDto: UpdateTableTrackDto) {
    return this.tableTrackService.update(+id, updateTableTrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableTrackService.remove(+id);
  }

  
}
