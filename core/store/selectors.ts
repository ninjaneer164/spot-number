import { SpotNumberState } from './state';

const getState = (state: any) => (state.spotNumber ?? state) as SpotNumberState;

export const selectSpotNumberState = (state: any): SpotNumberState => getState(state);

export const selectNumbers = (state: any): string[][] => getState(state).numbers;
