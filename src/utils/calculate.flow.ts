export class CalculateFlow {
  calculatePI(): number {
    return Math.PI / 4;
  }

  calculateAreCircumference(radio: number): number {
    return Math.pow(radio * 2, 2) * this.calculatePI();
  }

  calculateFlow(speed: number, areaCircunference: number): number {
    return areaCircunference * speed;
  }
}
