import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemSenhaPageRoutingModule } from './sem-senha-routing.module';

import { SemSenhaPage } from './sem-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemSenhaPageRoutingModule
  ],
  declarations: [SemSenhaPage]
})
export class SemSenhaPageModule {}
