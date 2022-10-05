import { PartialType } from '@nestjs/mapped-types';
import { CreateTableTrackDto } from './create-table-track.dto';

export class UpdateTableTrackDto extends PartialType(CreateTableTrackDto) {}
