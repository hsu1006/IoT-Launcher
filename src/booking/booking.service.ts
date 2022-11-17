import { Injectable, NotFoundException } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import console from 'console';
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
  ) { }

  create(createBookingDto: CreateBookingDto) {
    return this.booking.save(createBookingDto);
  }

  findAll() {
    return this.booking.find({
      relations: {
        tableId: true,
        userId: true,
      }
    });
  }

  findOne(bookingId: number) {
    return this.booking.findOne({
      where: {
        bookingId: bookingId
      },
      relations:{
        tableId: true,
        userId: true,
      }
    });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  async bookingVisualization(){
    const today = new Date();
    const first = today.getDate() - today.getDay();
  
    const previousSunday = new Date(today.setDate(first));
    const last = today.getDate() - today.getDay() + 7;
    const sunday = new Date(today.setDate(last));

    const booking = await this.booking.createQueryBuilder("booking")
    .leftJoinAndSelect("booking.tableId", "TableList")
    .groupBy('Day(booking.bookingDate)') 
    .select('WEEKDAY(booking.bookingDate) as Day, Count(TableList.tableId) as total') 
    .where('booking.bookingDate BETWEEN :startDate AND :endDate', {startDate: previousSunday,endDate: sunday})

    .orderBy('WEEKDAY(booking.bookingDate)', 'ASC')
    .execute();

    return booking;
  }

  async remove(id: number) {
    try {
      const booking = await this.findOne(id);
      return this.booking.remove([booking]);
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
