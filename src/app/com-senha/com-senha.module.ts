import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComSenhaPageRoutingModule } from './com-senha-routing.module';

import { ComSenhaPage } from './com-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComSenhaPageRoutingModule
  ],
  declarations: [ComSenhaPage]
})
export class ComSenhaPageModule {}
