import { beforeEach, describe, expect, it } from '@jest/globals';
import { SpotNumberUtils } from './spot-number';
import { initialState, SpotNumberParams } from './store/state';

describe('SpotNumberUtils', () => {
  let length: number;
  let params: SpotNumberParams;

  beforeEach(() => {
    params = initialState;
    length = params.cols * params.rows;
  });

  it('should calculate digital counts', () => {
    const { digit0Count, digit1Count, transposeCount } = SpotNumberUtils.getDigitCounts(params.digit0Rate, params.digit1Rate, params.transposeRate, length);

    expect(digit0Count).toBe(67);
    expect(digit1Count).toBe(67);
    expect(transposeCount).toBe(66);
  });

  it('should fill with digits', () => {
    const a = SpotNumberUtils.fill(Array.from({ length }), params.number, params.digit0Rate, params.digit1Rate, params.transposeRate);
    const { digit0, digit1, transposed } = SpotNumberUtils.getDigits(params.number);
    const { digit0Count, digit1Count, transposeCount } = SpotNumberUtils.getDigitCounts(params.digit0Rate, params.digit1Rate, params.transposeRate, length);
    const d0 = a.filter(d => d === digit0).length;
    const d1 = a.filter(d => d === digit1).length;
    const t = a.filter(d => d === transposed).length;

    expect(d0).toEqual(digit0Count);
    expect(d1).toEqual(digit1Count);
    expect(t).toEqual(transposeCount);
  });

  it('should return digits', () => {
    const { digit0, digit1, transposed } = SpotNumberUtils.getDigits(params.number);

    expect(digit0).toBe('11');
    expect(digit1).toBe('33');
    expect(transposed).toBe('31');
  });

  it('should return split arrays', () => {
    const a = Array.from({ length }) as string[];
    const a_ = SpotNumberUtils.splitArray(a, params.cols);

    expect(a_.length).toBe(params.rows);
  });

  it('should generate final array', () => {
    const a = SpotNumberUtils.generate(params);
    const i = JSON.stringify(a).indexOf(params.number.toString());

    expect(i).not.toBeLessThan(0);
  });
});
