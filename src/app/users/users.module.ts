import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { UserModule } from './components/user/user.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
