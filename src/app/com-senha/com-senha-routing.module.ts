import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComSenhaPage } from './com-senha.page';

const routes: Routes = [
  {
    path: '',
    component: ComSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComSenhaPageRoutingModule {}
