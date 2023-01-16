import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, MinLength } from 'class-validator';

export class CreateDensityDto {
  @IsString()
  @MinLength(1)
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  density: number;

  @IsString()
  @ApiProperty()
  densityUnit: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  temperature: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  temperatureUnit: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  pressure: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  pressureUnit: string;

  @IsString()
  @MinLength(1)
  @ApiProperty()
  dataSource: string;
}
