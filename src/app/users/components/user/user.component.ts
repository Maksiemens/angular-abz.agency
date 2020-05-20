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

  public tooltipOptions = {
    'tooltip-class': 'user-tooltip',
    placement: 'bottom',
    trigger: 'click',
    'hide-delay': 10000000
  };

  constructor() {}

  ngOnInit(): void {}

  getMaskedUserPhone(user: User): string {
    return user.phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  }

  checkUserNoImage(event) {
    event.target.src = './assets/img/users/img_user.svg';
  }

  /*
  https://stackoverflow.com/questions/52480394/how-to-activate-tooltip-when-ellipsis-is-activated-using-a-directive-in-angular
https://stackoverflow.com/questions/57269431/show-tooltip-only-when-the-ellipsis-is-active
https://stackoverflow.com/questions/19156234/detect-text-overflow-has-worked-and-add-tooltip-containing-full-text/19156627#19156627
https://docs.telerik.com/kendo-ui/controls/layout/tooltip/how-to/show-on-ellipsis
https://www.npmjs.com/package/ng2-tooltip-directive
http://shpargalkablog.ru/2013/02/word-wrap.html
https://stackoverflow.com/questions/44669340/how-to-truncate-text-in-angular2
!https://webformyself.com/css-hyphenation-perenos-slov-v-2019-godu/
http://mnater.github.io/Hyphenator/
https://www.npmjs.com/package/hyphen
https://stackoverflow.com/questions/45822383/add-hyphenation-in-angular-ionic-apps
  */
}
