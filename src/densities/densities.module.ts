import { Module } from '@nestjs/common';
import { DensitiesService } from './service/densities.service';
import { DensitiesController } from './controller/densities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Density } from './entities/density.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Density])],
  controllers: [DensitiesController],
  providers: [DensitiesService],
})
export class DensitiesModule {}
