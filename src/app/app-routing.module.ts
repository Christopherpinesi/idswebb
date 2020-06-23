import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./singup/singup.module').then( m => m.SingupPageModule)
  },
  {
    path: 'verifyemail',
    loadChildren: () => import('./verifyemail/verifyemail.module').then( m => m.VerifyemailPageModule)
  },
  {
    path: 'lhome',
    loadChildren: () => import('./lhome/lhome.module').then( m => m.LhomePageModule)
  },
  {
    path: 'dati-personali',
    loadChildren: () => import('./dati-personali/dati-personali.module').then( m => m.DatiPersonaliPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
