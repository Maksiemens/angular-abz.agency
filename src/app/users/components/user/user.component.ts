import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@app/core/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit(): void { }

  getMaskedUserPhone(user: User): string {
    return user.phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  }

  checkUserNoImage(event) {
    event.target.src = './assets/img/users/img_user.svg';
  }
}
