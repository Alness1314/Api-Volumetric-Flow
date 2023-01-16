import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DensitiesService } from '../service/densities.service';
import { CreateDensityDto } from '../dto/create-density.dto';
import { UpdateDensityDto } from '../dto/update-density.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Density')
@Controller('densities')
export class DensitiesController {
  constructor(private readonly densitiesService: DensitiesService) {}

  @Post()
  create(@Body() createDensityDto: CreateDensityDto) {
    return this.densitiesService.create(createDensityDto);
  }

  @Get()
  findAll() {
    return this.densitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.densitiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDensityDto: UpdateDensityDto) {
    return this.densitiesService.update(+id, updateDensityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.densitiesService.remove(+id);
  }
}
