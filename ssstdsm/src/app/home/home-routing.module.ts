import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'',
        loadChildren:() => 
          import('../pages/welcome/welcome.module').then(
            m => m.WelcomePageModule
          )
      },
      {
        path:'home/updates',
        loadChildren:() => 
          import('../pages/updates/updates.module').then(
            m => m.UpdatesPageModule
          )
      },
      {
        path:'home/timings',
        loadChildren:() => 
          import('../pages/timings/timings.module').then(
            m => m.TimingsPageModule
          )
      },
      {
        path:'home/mission',
        loadChildren:() => 
          import('../pages/mission/mission.module').then(
            m => m.MissionPageModule
          )
      },
      {
        path:'home/history',
        loadChildren:() => 
          import('../pages/history/history.module').then(
            m => m.HistoryPageModule
          )
      },
      {
        path:'home/festivals',
        loadChildren:() => 
          import('../pages/festivals/festivals.module').then(
            m => m.FestivalsPageModule
          )
      },
      {
        path:'home/donations',
        loadChildren:() => 
          import('../pages/donations/donations.module').then(
            m => m.DonationsPageModule
          )
      },
      {
        path:'home/contactus',
        loadChildren:() => 
          import('../pages/contactus/contactus.module').then(
            m => m.ContactusPageModule
          )
      },
      {
        path:'home/stories',
        loadChildren:() => 
          import('../pages/stories/stories.module').then(
            m => m.StoriesPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
