import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotoesLoginPage } from './botoes-login.page';

const routes: Routes = [
  {
    path: '',
    component: BotoesLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotoesLoginPageRoutingModule {}
