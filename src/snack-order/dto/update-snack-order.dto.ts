import { PartialType } from '@nestjs/mapped-types';
import { CreateSnackOrderDto } from './create-snack-order.dto';

export class UpdateSnackOrderDto extends PartialType(CreateSnackOrderDto) {}
