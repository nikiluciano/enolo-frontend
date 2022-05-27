import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'load',
    loadChildren: () => import('./load/load.module').then(m => m.LoadPageModule)
  },
  {
    path: 'warehouse',
    loadChildren: () => import('./warehouse/warehouse.module').then(m => m.WarehousePageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'forgot-pw',
    loadChildren: () => import('./forgot-pw/forgot-pw.module').then( m => m.ForgotPwPageModule)
  },
  {
    path: 'insert-conferment',
    loadChildren: () => import('./insert-conferment/insert-conferment.module').then( m => m.InsertConfermentPageModule)
  },{
    path: 'user-account',
    loadChildren: () => import('./user-account/user-account.module').then( m => m.UserAccountPageModule)
  },  {
    path: 'patch-account',
    loadChildren: () => import('./patch-account/patch-account.module').then( m => m.PatchAccountPageModule)
  },
  {
    path: 'patch-account',
    loadChildren: () => import('./patch-account/patch-account.module').then( m => m.PatchAccountPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
