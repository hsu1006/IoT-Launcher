import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTableTrackDto } from './dto/create-table-track.dto';
import { UpdateTableTrackDto } from './dto/update-table-track.dto';
import { TableTrack } from './entities/table-track.entity';
import { MqttClient } from '@nestjs/microservices/external/mqtt-client.interface';
import { ModuleRef } from '@nestjs/core';


@Injectable()
export class TableTrackService {
  private client: MqttClient;
  constructor(
    @InjectRepository(TableTrack)
    private readonly tableTrack: Repository<TableTrack>,
    private moduleRef: ModuleRef,
  ){}

  onModuleInit() {
    this.client = this.moduleRef.get('MQTT_SERVICE', { strict: false });
  }


  create(createTableTrackDto: CreateTableTrackDto) {
    this.client.emit('tableTrack/test', { tableId: createTableTrackDto.tableId });
    return this.tableTrack.save(createTableTrackDto) ;
  }

  findAll() {
    return this.tableTrack.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tableTrack`;
  }

  update(id: number, updateTableTrackDto: UpdateTableTrackDto) {
    return `This action updates a #${id} tableTrack`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableTrack`;
  }
}
