import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from '../actions';
import { User } from '@app/core/models/user.model';

export const userFeatureKey = 'user';

export interface State extends EntityState<User> {
  selectedUserId: string | null;
  isLoading: boolean;
  isLoaded: boolean;
  total_users: number;
}

export function selectUserId(user: User): string {
  return user.id;
}

export function sortByRegistrationTimestamp(a: User, b: User): number {
  return b.registration_timestamp - a.registration_timestamp;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId,
  sortComparer: sortByRegistrationTimestamp,
});

export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
  isLoading: false,
  isLoaded: false,
  total_users: 0
});


export const userReducer = createReducer(
  initialState,

  on(UserActions.loadUsers, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(UserActions.loadUsersSuccess, (state, { response }) => ({
    ...adapter.addMany(response.users, state),
    isLoading: false,
    isLoaded: true,
    total_users: response.total_users
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;

export const getSelectedUserId = (state: State) => state.selectedUserId;
export const selectIsLoading = (state: State) => state.isLoading;
export const selectIsLoaded = (state: State) => state.isLoaded;
export const selectUserTotalServer = (state: State) => state.total_users;
