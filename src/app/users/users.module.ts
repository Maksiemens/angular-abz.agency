import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './store/reducers/user.reducer';
import { UserEffects } from './store/effects';
import { UsersComponent } from './pages/users/users.component';
import { UserModule } from './components/user/user.module';
import { LoaderButtonModule } from '@app/shared/components/loader-button/loader-button.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    LoaderButtonModule,

    // !NGRX
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
