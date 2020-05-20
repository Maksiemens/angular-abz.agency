import { createAction, props } from '@ngrx/store';
import { User } from '@app/core/models/user.model';



// export const loadUsers = createAction('[User/API] Load Users', props<{ users: User[] }>());
export const loadUsers = createAction(
  '[User/API] Load Users',
  props<{ pagination: { page: number; count: number } }>()
);

export const loadUsersSuccess = createAction(
  '[User/API] Load Users Success',
  props<{ response: any  }>()
);

export const loadUsersFailure = createAction(
  '[User/API] Load Users Failure',
  props<{ error: any }>()
);

export const addUser = createAction(
  '[User/API] Add User',
  props<{ user: User }>()
);
// export const addUser = createAction('[User/API] Add User', props<{ user: User }>());
// export const addUser = createAction('[User/API] Add User', props<{ user: User }>());


// export const addUsers = createAction('[User/API] Add Users', props<{ users: User[] }>());
// export const upsertUsers = createAction('[User/API] Upsert Users', props<{ users: User[] }>());
// export const updateUser = createAction('[User/API] Update User', props<{ update: Update<User> }>());
// export const updateUsers = createAction('[User/API] Update Users', props<{ updates: Update<User>[] }>());



// export const deleteUsers = createAction('[User/API] Delete Users', props<{ ids: string[] }>());


