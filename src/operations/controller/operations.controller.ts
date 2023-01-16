import { RequestCalculateFlowAtmospheric } from './../dto/request-calculate-flow-atmospheric.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OperationsService } from '../service/operations.service';

@ApiTags('Operations')
@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post()
  calculateFlowAtmosphericTank(
    @Body() requestInfo: RequestCalculateFlowAtmospheric,
  ) {
    return this.operationsService.CalculateFlowAtmospheric(requestInfo);
  }
}
