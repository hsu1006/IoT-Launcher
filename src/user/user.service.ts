import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidateUserDto } from './dto/validate-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ){}
  create(createUserDto: CreateUserDto) {
    return this.user.save(createUserDto);
  }

  findAll() {
    return this.user.find();
  }

  findOne(userId: number) {
    try{
      return this.user.findOneBy({userId});
    }catch (error){
      throw error
    } 
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async validateUser(validateUserDto: ValidateUserDto){
    const username = validateUserDto.username
    const user = await this.user.findOneBy({username});
    if (user != null)
    {
      if(user.password == validateUserDto.password)
      {
        return user;
      }
    }
    throw new ForbiddenException();
  }
}
