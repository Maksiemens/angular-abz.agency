import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(fromUser.userFeatureKey);

export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectUserIds
);

export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);

export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);

export const selectUserTotal = createSelector(
  selectUserState,
  fromUser.selectUserTotal
);

export const selectCurrentUserId = createSelector(
  selectUserState,
  fromUser.getSelectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);

export const selectIsLoading = createSelector(
  selectUserState,
  fromUser.selectIsLoading
);

export const selectIsLoaded = createSelector(
  selectUserState,
  fromUser.selectIsLoaded
);

export const selectUserTotalServer = createSelector(
  selectUserState,
  fromUser.selectUserTotalServer
);

export const selectIsAllUsersReceived = createSelector(
  selectUserTotal,
  selectUserTotalServer,
  (userTotal, userTotalServer) => userTotal === userTotalServer
);

