export class Conversions {
  static GRAVITY_FORCE = 9.80665;
  CONVERSION_FACTOR_OF_NEWTON_PER_CUBIC_METER = 1000;

  calculateSpecificWeightFromDensity(density: number) {
    return Conversions.GRAVITY_FORCE * density;
  }

  convertKiloPascalToNewtonPerCubicMeter(kiloPascal: number) {
    return kiloPascal * this.CONVERSION_FACTOR_OF_NEWTON_PER_CUBIC_METER;
  }
}
