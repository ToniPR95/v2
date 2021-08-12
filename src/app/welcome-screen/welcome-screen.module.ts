// import { NavbarComponent } from './../navbar/navbar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeScreenRoutingModule } from './welcome-screen-routing.module';
import { WelcomeScreenComponent } from './welcome-screen.component';



@NgModule({
  declarations: [
    WelcomeScreenComponent,
    // NavbarComponent

  ],
  imports: [
    CommonModule,
    WelcomeScreenRoutingModule,

  ]
})
export class WelcomeScreenModule { }
