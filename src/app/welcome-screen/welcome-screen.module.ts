import { LoginModule } from './../login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeScreenRoutingModule } from './welcome-screen-routing.module';
import { WelcomeScreenComponent } from './welcome-screen.component';

@NgModule({
  declarations: [WelcomeScreenComponent],
  imports: [CommonModule, WelcomeScreenRoutingModule, LoginModule],
})
export class WelcomeScreenModule {}
