import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSnackDto } from 'src/snack/dto/create-snack.dto';
import { Snack } from 'src/snack/entities/snack.entity';
import { User } from 'src/user/entities/user.entity';
import { getRepository, Repository } from 'typeorm';
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
    @InjectRepository(Snack)
    private readonly snack: Repository<Snack>,
  ){}

  async create(createSnackOrderDto: CreateSnackOrderDto) {
   
    const snack = await this.snack.findOne({
      where:{
        snackId: createSnackOrderDto.itemId,
      },
    })
    if(snack.currentStock >= createSnackOrderDto.quantity)
    {
      snack.currentStock -= createSnackOrderDto.quantity
      this.snack.save(snack)
      const owner = await this.user.findOne({
        where:{
          userId: createSnackOrderDto.ownerId,
        },
      })
     
      createSnackOrderDto.totalAmount = createSnackOrderDto.quantity * snack.price
      return this.snackOrder.save({
        itemId: snack,
        ownerId: owner,
        quantity: createSnackOrderDto.quantity,
        totalAmount: createSnackOrderDto.totalAmount,
      });
    }else{
      return null;
    }
  }

  findAll() {
    return this.snackOrder.find({
      relations: {
          itemId: true,
          ownerId: true,
      },});
  }

  findOne(snackOrderId: number) {
    return this.snackOrder.findOne({
      where: {
        snackOrderId: snackOrderId
      },
      relations:{
        itemId: true,
        ownerId: true,
      }
    });
  }

  async findAllFromOneUser(id: number){
    const user  = await this.user.findOneBy({userId: id});
    return this.snackOrder.find({
      where:{
        ownerId: {userId: id}
      },
      relations:{
        itemId: true,
        ownerId: true,
      }
    })
  }

  async snackOrderVisualization(){
    const order = await this.snackOrder.createQueryBuilder("snackOrder")
    .leftJoinAndSelect("snackOrder.itemId", "Snack")
    .groupBy('snackOrder.itemId') 
    .select('Snack.name as SnackName, sum(snackOrder.quantity) as totalQuantity') 
    .orderBy('count(snackOrder.quantity)', 'DESC')
    .execute();

    return order;
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
