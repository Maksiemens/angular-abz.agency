import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromUser from '@app/users/store';
import { Observable } from 'rxjs';
import { User } from '@app/core/models/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users$: Observable<User[]>;
  public isLoading$: Observable<boolean>;
  public isLoaded$: Observable<boolean>;
  public isAllUsersReceived$: Observable<boolean>;
  public pagination = { page: 1, count: 6 };

  constructor(
    private store: Store<fromUser.State>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fromUser.loadUsers({ pagination: { page: 1, count: 6 } }));
    this.users$ = this.store.pipe(select(fromUser.selectAllUsers));
    this.isLoading$ = this.store.pipe(select(fromUser.selectIsLoading));
    this.isLoaded$ = this.store.pipe(select(fromUser.selectIsLoaded));
    this.isAllUsersReceived$ = this.store.pipe(select(fromUser.selectIsAllUsersReceived));
  }

  trackByFn(index, item) {
    return item.id;
  }

  loadMoreUsers() {
    this.pagination = {...this.pagination, page: this.pagination.page + 1 };
    // this.page += 1;
    console.log( this.pagination);

    this.store.dispatch(fromUser.loadUsers({ pagination: this.pagination }));
  }
}
