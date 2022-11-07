import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateSnackOrderDto } from './dto/create-snack-order.dto';
import { UpdateSnackOrderDto } from './dto/update-snack-order.dto';
import { SnackOrder } from './entities/snack-order.entity';

@Injectable()
export class SnackOrderService {
  constructor(
    @InjectRepository(SnackOrder)
    private readonly snackOrder: Repository<SnackOrder>,
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ){}
  create(createSnackOrderDto: CreateSnackOrderDto) {
    return this.snackOrder.save(createSnackOrderDto);
  }

  findAll() {
    return this.snackOrder.find({
      relations: {
          snackId: true,
          userId: true,
      },});
  }

  findOne(snackOrderId: number) {
    return this.snackOrder.findOne({
      where: {
        snackOrderId: snackOrderId
      },
      relations:{
        snackId: true,
        userId: true,
      }
    });
  }

  async findAllFromOneUser(userId: number){
    const user  = await this.user.findOneBy({userId});
    return this.snackOrder.find({
      where:{
        userId: user
      },
      relations:{
        snackId: true,
        userId: true,
      }
    })
  }

  update(id: number, updateSnackOrderDto: UpdateSnackOrderDto) {
    return `This action updates a #${id} snackOrder`;
  }

  async remove(id: number) {
    try{
      const snackOrder = await this.findOne(id);
      return this.snackOrder.remove([snackOrder]);
    }catch(e){
      throw new NotFoundException();
    }
  }
}
