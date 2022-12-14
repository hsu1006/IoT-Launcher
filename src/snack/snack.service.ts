import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSnackDto } from './dto/create-snack.dto';
import { UpdateSnackDto } from './dto/update-snack.dto';
import { Snack } from './entities/snack.entity';

@Injectable()
export class SnackService {
  constructor(
    @InjectRepository(Snack)
    private readonly snack: Repository<Snack>,
  ){}
  create(createSnackDto: CreateSnackDto) {
    return this.snack.save(createSnackDto);
  }

  findAll() {
    return this.snack.find();
  }

  findOne(snackId: number) {
    return this.snack.findOneBy({snackId});
  }

  async update(snackId: number, updateSnackDto: UpdateSnackDto) {
    await this.snack.update(snackId, updateSnackDto);
    return this.snack.findOneBy({snackId});
  }

  async remove(id: number) {
    try {
      const snack = await this.snack.findOneByOrFail({ snackId: id });
      return this.snack.remove([snack]);
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
