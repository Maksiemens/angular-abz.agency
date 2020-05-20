import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '@app/core/header/header.module';
import { BannerModule } from '@app/banner/banner.module';
import { AboutMeModule } from '@app/about-me/about-me.module';
import { UsersModule } from '@app/users/users.module';
import { SignUpModule } from '@app/sign-up/sign-up.module';
import { FooterModule } from '@app/core/footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BannerModule,
    AboutMeModule,
    UsersModule,
    SignUpModule,
    FooterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
