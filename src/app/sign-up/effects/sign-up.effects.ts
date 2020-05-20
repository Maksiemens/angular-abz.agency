import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SignUpActions from '../actions/sign-up.actions';



@Injectable()
export class SignUpEffects {

  loadSignUps$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SignUpActions.loadSignUps),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SignUpActions.loadSignUpsSuccess({ data })),
          catchError(error => of(SignUpActions.loadSignUpsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
