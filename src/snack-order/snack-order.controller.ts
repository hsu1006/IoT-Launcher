import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SnackOrderService } from './snack-order.service';
import { CreateSnackOrderDto } from './dto/create-snack-order.dto';
import { UpdateSnackOrderDto } from './dto/update-snack-order.dto';

@Controller('snack-order')
export class SnackOrderController {
  constructor(private readonly snackOrderService: SnackOrderService) {}

  @Post()
  create(@Body() createSnackOrderDto: CreateSnackOrderDto) {
    return this.snackOrderService.create(createSnackOrderDto);
  }

  @Get()
  findAll() {
    return this.snackOrderService.findAll();
  }

  @Get('visualization')
  snackOrderVisualization(){
    return this.snackOrderService.snackOrderVisualization();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.snackOrderService.findOne(+id);
  }

  @Get('user/:id')
  findAllFromOneUser(@Param('id') id: string){
    return this.snackOrderService.findAllFromOneUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSnackOrderDto: UpdateSnackOrderDto) {
    return this.snackOrderService.update(+id, updateSnackOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.snackOrderService.remove(+id);
  }
}
