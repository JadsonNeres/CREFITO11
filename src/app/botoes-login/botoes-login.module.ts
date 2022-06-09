import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotoesLoginPageRoutingModule } from './botoes-login-routing.module';

import { BotoesLoginPage } from './botoes-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotoesLoginPageRoutingModule
  ],
  declarations: [BotoesLoginPage]
})
export class BotoesLoginPageModule {}
