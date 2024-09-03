
import { SpotNumberState, selectNumbers as _selectNumbers } from '@core';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selecSpotNumberState =
  createFeatureSelector<SpotNumberState>('spotNumber');

export const selectNumbers = createSelector(
  selecSpotNumberState,
  _selectNumbers
);
