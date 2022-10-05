import { PartialType } from '@nestjs/mapped-types';
import { CreateTableListDto } from './create-table-list.dto';

export class UpdateTableListDto extends PartialType(CreateTableListDto) {}
