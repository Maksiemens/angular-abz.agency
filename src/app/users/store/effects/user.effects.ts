import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from '../actions';
import { UsersService } from '@app/core/services/users.service';


@Injectable()
export class UserEffects {

  // loadUsers$ = createEffect(() =>
  //  this.actions$.pipe(
  //     ofType(UserActions.loadUsers),
  //     switchMap(({ pagination }) => {
  //       return this.usersService.loadUsers(pagination).pipe(
  //         map((response) => UserActions.loadUsersSuccess({ users: response.users })),
  //         catchError((error) => of(UserActions.loadUsersFailure({ error })),
  //         ),
  //       );
  //     }),
  //   ),
  // );

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(({ pagination }) => {
        return this.usersService.loadUsers(pagination).pipe(
          map((response) => UserActions.loadUsersSuccess({ response })),
          catchError((error) => of(UserActions.loadUsersFailure({ error }))),
        );
      }),
    ),
  );


  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) {}

}
