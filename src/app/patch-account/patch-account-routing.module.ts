import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatchAccountPage } from './patch-account.page';

const routes: Routes = [
  {
    path: '',
    component: PatchAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatchAccountPageRoutingModule {}
