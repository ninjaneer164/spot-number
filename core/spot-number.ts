import { SpotNumberParams } from './store/state';

export const SpotNumberUtils = {
  fill: (array: string[], value: string, digit0Rate: number, digit1Rate: number, transposeRate: number): string[] => {
    const { digit0, digit1, transposed } = SpotNumberUtils.getDigits(value);
    const { digit0Count, digit1Count, transposeCount } = SpotNumberUtils.getDigitCounts(digit0Rate, digit1Rate, transposeRate, array.length);

    let i = 0;
    for (; i < digit0Count; i++) {
      array[i] = digit0;
    }
    for (; i < digit0Count + digit1Count; i++) {
      array[i] = digit1;
    }
    for (; i < array.length; i++) {
      array[i] = transposed;
    }

    return array;
  },
  generate: (params: SpotNumberParams): string[][] => {
    const length = params.cols * params.rows;
    const numbers: string[] = SpotNumberUtils.fill(Array.from({ length }), params.number, params.digit0Rate, params.digit1Rate, params.transposeRate);
    const numbers_: string[] = SpotNumberUtils.randomizeArray(numbers);

    // set the number
    let n = Math.round(Math.random() * length);
    numbers_[n] = params.number.toString();

    // split array and return
    return SpotNumberUtils.splitArray(numbers_, params.cols);
  },
  getDigitCounts: (digit0Rate: number, digit1Rate: number, transposeRate: number, length: number) => {
    const total = digit0Rate + digit1Rate + transposeRate;
    const digit0Count = Math.ceil((digit0Rate * length) / total);
    const digit1Count = Math.ceil((digit1Rate * length) / total);
    const transposeCount = length - (digit0Count + digit1Count);
    return {
      digit0Count,
      digit1Count,
      transposeCount
    };
  },
  getDigits: (digits: string) => {
    const digit0 = digits[0] + digits[0];
    const digit1 = digits[1] + digits[1];
    const transposed = digits[1] + digits[0];

    return {
      digit0,
      digit1,
      transposed
    };
  },
  randomizeArray: (array: string[]): string[] => {
    const a = [...array];
    const array_: string[] = [];

    while (a.length > 0) {
      let n = Math.round(Math.random() * a.length);
      if (n >= a.length) {
        n = a.length - 1;
      }
      array_.push(a.splice(n, 1)[0]);
    }

    return array_;
  },
  splitArray: (array: string[], itemsPerRow: number): string[][] => {
    const array_: string[][] = [];
    while (array.length > 0) {
      array_.push(array.splice(0, itemsPerRow));
    }
    return array_;
  }
}
