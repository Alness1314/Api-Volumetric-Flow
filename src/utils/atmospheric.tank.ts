import { Conversions } from './conversions';

export class AtmosphericTank {
  calculateEndHeight(liquidHeight: number, holeHeight: number): number {
    return liquidHeight - holeHeight;
  }

  calculateSpeed(liquidHeight: number, holeHeight: number): number {
    const speed: number = Math.sqrt(
      Conversions.GRAVITY_FORCE *
        2 *
        this.calculateEndHeight(liquidHeight, holeHeight),
    );
    return speed;
  }
}
