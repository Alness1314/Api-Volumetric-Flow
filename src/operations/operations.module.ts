import { Module } from '@nestjs/common';
import { OperationsService } from './service/operations.service';
import { OperationsController } from './controller/operations.controller';

@Module({
  controllers: [OperationsController],
  providers: [OperationsService],
})
export class OperationsModule {}
