import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertConfermentPage } from './insert-conferment.page';

const routes: Routes = [
  {
    path: '',
    component: InsertConfermentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertConfermentPageRoutingModule { }
