import { CalculateFlow } from './../../utils/calculate.flow';
import { Injectable } from '@nestjs/common';
import { RequestCalculateFlowAtmospheric } from '../dto/request-calculate-flow-atmospheric.dto';
import { AtmosphericTank } from 'src/utils/atmospheric.tank';
import { ResponseCalculateFlowAtmospheric } from '../dto/response-calculate-flow-atmospheric.dto';
import { VolumetricFlow } from '../dto/response-volumetric-flow.dto';
import { Speed } from '../dto/response-spped.dto';

@Injectable()
export class OperationsService {
  CalculateFlowAtmospheric(
    requestCalculateAtmospheric: RequestCalculateFlowAtmospheric,
  ) {
    const calculateSpeed = new AtmosphericTank();
    const velocidad = calculateSpeed.calculateSpeed(
      requestCalculateAtmospheric.alturaLiquido,
      requestCalculateAtmospheric.alturaOrificio,
    );
    const calculateFlowAtmospheric = new CalculateFlow();
    const AreaCircunferencia =
      calculateFlowAtmospheric.calculateAreCircumference(
        requestCalculateAtmospheric.radio,
      );
    const calculateFlow = calculateFlowAtmospheric.calculateFlow(
      velocidad,
      AreaCircunferencia,
    );

    const calculateFlowObj: ResponseCalculateFlowAtmospheric =
      new ResponseCalculateFlowAtmospheric();
    const speedObj: Speed = new Speed();
    const volumetricFlowObj: VolumetricFlow = new VolumetricFlow();
    speedObj.valorNumerico = velocidad;
    speedObj.unidadMedida = 'm/s';
    volumetricFlowObj.valorNumerico = calculateFlow;
    volumetricFlowObj.unidadMedida = ' m³/s';
    calculateFlowObj.speed = speedObj;
    calculateFlowObj.volumetricFlow = volumetricFlowObj;

    return calculateFlowObj;
  }
}
