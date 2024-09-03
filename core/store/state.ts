export interface SpotNumberParams {
  number: string;
  cols: number;
  digit0Rate: number;
  digit1Rate: number;
  rows: number;
  transposeRate: number;
}

export const initialParams: SpotNumberParams = {
  number: '13',
  cols: 10,
  digit0Rate: 3,
  digit1Rate: 3,
  rows: 20,
  transposeRate: 3,
}

export interface SpotNumberState extends SpotNumberParams {
  digit0: string;
  digit1: string;
  numbers: string[][];
  transposed: string;
}

export const initialState: SpotNumberState = {
  ...initialParams,
  digit0: '11',
  digit1: '33',
  numbers: [],
  transposed: '31',
};
