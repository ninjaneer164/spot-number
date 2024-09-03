import { SpotNumberActionName, SpotNumberParams } from '@core';
import { createAction, props } from '@ngrx/store';

export namespace SpotNumberActions {
  export const generageNumbers = createAction(
    SpotNumberActionName.generateNumbers,
    props<{ params: SpotNumberParams }>()
  );
}
