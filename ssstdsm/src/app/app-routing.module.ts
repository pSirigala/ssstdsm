import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageRoutingModule } from './home/home-routing.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m=>m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomePageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
