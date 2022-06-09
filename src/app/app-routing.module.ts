import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'botoes-login',
    loadChildren: () => import('./botoes-login/botoes-login.module').then( m => m.BotoesLoginPageModule)
  },
  {
    path: 'sem-senha',
    loadChildren: () => import('./sem-senha/sem-senha.module').then( m => m.SemSenhaPageModule)
  },
  {
    path: 'com-senha',
    loadChildren: () => import('./com-senha/com-senha.module').then( m => m.ComSenhaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
