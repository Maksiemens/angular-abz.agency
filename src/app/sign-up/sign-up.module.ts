import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { EffectsModule } from '@ngrx/effects';
import { SignUpEffects } from './effects/sign-up.effects';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SignUpEffects])
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }
