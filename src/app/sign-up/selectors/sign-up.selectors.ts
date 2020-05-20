import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSignUp from '../reducers/sign-up.reducer';

export const selectSignUpState = createFeatureSelector<fromSignUp.State>(
  fromSignUp.signUpFeatureKey
);
