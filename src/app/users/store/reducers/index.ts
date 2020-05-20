import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '@env/environment';
import * as fromUser from './user.reducer';


export interface State {
  [fromUser.userFeatureKey]: fromUser.State;
}

export function reducers(state: State | undefined, action: Action) {
  return combineReducers({
    [fromUser.userFeatureKey]: fromUser.reducer,
  })(state, action);
}

export const getUserState = createFeatureSelector<State>(
  fromUser.userFeatureKey,
);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
