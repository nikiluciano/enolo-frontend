import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewConfermentPage } from './view-conferment.page';

const routes: Routes = [
  {
    path: '',
    component: ViewConfermentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewConfermentPageRoutingModule {}
