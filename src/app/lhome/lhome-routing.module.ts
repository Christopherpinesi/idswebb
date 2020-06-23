import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LhomePage } from './lhome.page';

const routes: Routes = [
  {
    path: '',
    component: LhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LhomePageRoutingModule {}
