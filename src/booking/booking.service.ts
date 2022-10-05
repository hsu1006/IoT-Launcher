import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly booking: Repository<Booking>,
    private moduleRef: ModuleRef,
  ){}
  
  create(createBookingDto: CreateBookingDto) {
    return this.booking.save(createBookingDto);
  }

  findAll() {
    return this.booking.find();
  }

  findOne(bookingId: number) {
    return this.booking.findOneBy({bookingId});
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
