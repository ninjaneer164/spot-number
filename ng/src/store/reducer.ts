import { initialState, SpotNumberUtils } from '@core';
import { createReducer, on } from '@ngrx/store';
import { SpotNumberActions } from './acions';

export const spotNumberReducer = createReducer(
  initialState,
  on(SpotNumberActions.generageNumbers, (state, { params }) => {
    const { digit0, digit1, transposed } = SpotNumberUtils.getDigits(params.number);
    const numbers = SpotNumberUtils.generate(params);

    return {
      ...state,
      ...params,
      digit0,
      digit1,
      numbers,
      transposed
    };
  })
);
