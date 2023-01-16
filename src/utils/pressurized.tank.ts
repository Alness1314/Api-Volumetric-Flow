import { Conversions } from './conversions';

export class PressurizedTank {
  conversions: Conversions = new Conversions();

  private calculateResultPressureOnSpecificWeightMoreDepth(
    density: number,
    pressureInkilopascals: number,
    depth: number,
  ): number {
    // formula: p/γ + z
    return (
      this.calculatePressureOnSpecificWeight(density, pressureInkilopascals) +
      depth
    );
  }

  private calculatePressureOnSpecificWeight(
    density: number,
    pressureInkilopascals: number,
  ): number {
    // formula: p/γ
    return (
      this.conversions.convertKiloPascalToNewtonPerCubicMeter(
        pressureInkilopascals,
      ) / this.conversions.calculateSpecificWeightFromDensity(density)
    );
  }

  private calculateSpeedSquared(
    density: number,
    pressureInkilopascals: number,
    depth: number,
  ): number {
    // formula: p/γ + z * 2g
    return (
      this.calculateResultPressureOnSpecificWeightMoreDepth(
        density,
        pressureInkilopascals,
        depth,
      ) *
      Conversions.GRAVITY_FORCE *
      2
    );
  }

  public calculateSpeed(
    density: number,
    pressureInkilopascals: number,
    depth: number,
  ) {
    // formula: v = √ (p/γ + z * 2g)
    return Math.sqrt(
      this.calculateSpeedSquared(density, pressureInkilopascals, depth),
    );
  }
}
