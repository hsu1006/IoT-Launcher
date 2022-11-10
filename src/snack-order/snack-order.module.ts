import { Module } from '@nestjs/common';
import { SnackOrderService } from './snack-order.service';
import { SnackOrderController } from './snack-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnackOrder } from './entities/snack-order.entity';
import { User } from 'src/user/entities/user.entity';
import { Snack } from 'src/snack/entities/snack.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SnackOrder, User, Snack])],
  controllers: [SnackOrderController],
  providers: [SnackOrderService]
})
export class SnackOrderModule {}
