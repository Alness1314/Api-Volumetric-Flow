import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class RequestCalculateFlowAtmospheric {
  @ApiProperty()
  @IsNumber()
  alturaLiquido: number;

  @ApiProperty()
  @IsNumber()
  alturaOrificio: number;

  @ApiProperty()
  @IsNumber()
  radio: number;
}
