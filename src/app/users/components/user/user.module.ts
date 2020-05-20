import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
