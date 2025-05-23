export class RomanNumeral {
  private romanMap: Record<string, number> = { I: 1 };

  of(value: string): number {
    let total = 0;
    for (let i = 0; i < value.length; i++) {
      total += this.romanMap[value[i]];
    }
    return total;
  }
}
