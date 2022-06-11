import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splashscreen',
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
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule),
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'forgot-pw',
    loadChildren: () => import('./forgot-pw/forgot-pw.module').then(m => m.ForgotPwPageModule)
  },
  {
    path: 'insert-conferment',
    loadChildren: () => import('./insert-conferment/insert-conferment.module').then( m => m.InsertConfermentPageModule)
  },
  {
    path: 'user-account',
    loadChildren: () => import('./user-account/user-account.module').then( m => m.UserAccountPageModule)
  },
  {
    path: 'patch-account',
    loadChildren: () => import('./patch-account/patch-account.module').then( m => m.PatchAccountPageModule)
  },
  {
    path: 'patch-account',
    loadChildren: () => import('./patch-account/patch-account.module').then( m => m.PatchAccountPageModule)

  },
  {
    path: 'view-conferment',
    loadChildren: () => import('./view-conferment/view-conferment.module').then( m => m.ViewConfermentPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'show-user',
    loadChildren: () => import('./show-user/show-user.module').then( m => m.ShowUserPageModule)
  },
  {
    path: 'suppliers',
    loadChildren: () => import('./suppliers/suppliers.module').then( m => m.SuppliersPageModule)
  },  {
    path: 'add-suppliers',
    loadChildren: () => import('./add-suppliers/add-suppliers.module').then( m => m.AddSuppliersPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
