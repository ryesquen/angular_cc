export interface DiscountStrategy {
  apply(total: number): number;
}

export class RegularDiscount implements DiscountStrategy {
  apply(total: number): number {
    return total;
  }
}

export class PremiumDiscount implements DiscountStrategy {
  apply(total: number): number {
    return total * 0.8;
  }
}

export class DiscountCalculator {
  constructor(private strategy: DiscountStrategy) {}

  calculate(total: number): number {
    return this.strategy.apply(total);
  }
}

const calculator = new DiscountCalculator(new PremiumDiscount());

console.log(calculator.calculate(100)); // Output: 80
