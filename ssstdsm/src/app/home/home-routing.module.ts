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
        path:'',
        loadChildren:() => 
          import('../pages/updates/updates.module').then(
            m => m.UpdatesPageModule
          )
      },
      {
        path:'',
        loadChildren:() => 
          import('../pages/timings/timings.module').then(
            m => m.TimingsPageModule
          )
      },
      {
        path:'mission',
        loadChildren:() => 
          import('../pages/mission/mission.module').then(
            m => m.MissionPageModule
          )
      },
      {
        path:'',
        loadChildren:() => 
          import('../pages/history/history.module').then(
            m => m.HistoryPageModule
          )
      },
      {
        path:'',
        loadChildren:() => 
          import('../pages/festivals/festivals.module').then(
            m => m.FestivalsPageModule
          )
      },
      {
        path:'',
        loadChildren:() => 
          import('../pages/donations/donations.module').then(
            m => m.DonationsPageModule
          )
      },
      {
        path:'',
        loadChildren:() => 
          import('../pages/contactus/contactus.module').then(
            m => m.ContactusPageModule
          )
      },
      {
        path:'',
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
