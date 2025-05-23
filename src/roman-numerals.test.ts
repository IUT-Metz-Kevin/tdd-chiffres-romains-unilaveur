import { describe, it, expect } from 'vitest';
import { RomanNumeral } from './RomanNumeral.js';

describe('RomanNumeral', () => {
  const roman = new RomanNumeral();

  it('should convert I to 1', () => {
    expect(roman.of('I')).toBe(1);
  });

  it('should convert II to 2', () => {
  expect(roman.of('II')).toBe(2);
});

});
