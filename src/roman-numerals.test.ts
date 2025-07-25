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

it('should convert III to 3', () => {
  expect(roman.of('III')).toBe(3);
});

it('should convert IV to 4', () => {
  expect(roman.of('IV')).toBe(4);
});


});
