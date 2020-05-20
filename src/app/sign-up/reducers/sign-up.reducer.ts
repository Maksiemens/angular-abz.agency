import { Action, createReducer, on } from '@ngrx/store';
import * as SignUpActions from '../actions/sign-up.actions';

export const signUpFeatureKey = 'signUp';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(SignUpActions.loadSignUps, state => state),
  on(SignUpActions.loadSignUpsSuccess, (state, action) => state),
  on(SignUpActions.loadSignUpsFailure, (state, action) => state),

);

