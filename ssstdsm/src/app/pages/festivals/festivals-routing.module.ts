import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FestivalsPage } from './festivals.page';

const routes: Routes = [
  {
    path: '',
    component: FestivalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FestivalsPageRoutingModule {}
