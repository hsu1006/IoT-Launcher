import { Module } from '@nestjs/common';
import { SnackService } from './snack.service';
import { SnackController } from './snack.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Snack } from './entities/snack.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Snack])],
  controllers: [SnackController],
  providers: [SnackService]
})
export class SnackModule {}
