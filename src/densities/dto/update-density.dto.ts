import { PartialType } from '@nestjs/mapped-types';
import { CreateDensityDto } from './create-density.dto';

export class UpdateDensityDto extends PartialType(CreateDensityDto) {}
