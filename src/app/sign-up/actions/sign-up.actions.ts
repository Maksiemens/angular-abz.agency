import { createAction, props } from '@ngrx/store';

export const loadSignUps = createAction(
  '[SignUp] Load SignUps'
);

export const loadSignUpsSuccess = createAction(
  '[SignUp] Load SignUps Success',
  props<{ data: any }>()
);

export const loadSignUpsFailure = createAction(
  '[SignUp] Load SignUps Failure',
  props<{ error: any }>()
);
