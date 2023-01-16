import { ResponseDensityDto } from './../dto/response-density.dto';
import { Density } from './../entities/density.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDensityDto } from '../dto/create-density.dto';
import { UpdateDensityDto } from '../dto/update-density.dto';
import { Repository } from 'typeorm';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class DensitiesService {
  constructor(
    @InjectRepository(Density)
    private readonly _densityRepository: Repository<Density>,
  ) {}

  async create(
    createDensityDto: CreateDensityDto,
  ): Promise<ResponseDensityDto> {
    const newDensity = this._densityRepository.create(createDensityDto);
    let density: Density;
    try {
      density = await this._densityRepository.save(newDensity);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error: ' + error);
    }
    return plainToInstance(ResponseDensityDto, density);
  }

  async findAll(): Promise<ResponseDensityDto[]> {
    const densityList = await this._densityRepository.find({
      where: { active: true },
    });
    return plainToInstance(ResponseDensityDto, densityList);
  }

  async findOne(id: string): Promise<ResponseDensityDto> {
    const density = await this._densityRepository.findOne({
      where: { id: id, active: true },
    });
    if (!density) {
      console.log('No density found');
      throw new NotFoundException('No density found');
    }
    return plainToInstance(ResponseDensityDto, density);
  }

  update(id: number, updateDensityDto: UpdateDensityDto) {
    updateDensityDto.density = 22;
    return `This action updates a #${id} density`;
  }

  remove(id: number) {
    return `This action removes a #${id} density`;
  }
}
