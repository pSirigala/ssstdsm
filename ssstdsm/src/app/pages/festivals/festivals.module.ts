import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FestivalsPageRoutingModule } from './festivals-routing.module';

import { FestivalsPage } from './festivals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FestivalsPageRoutingModule
  ],
  declarations: [FestivalsPage]
})
export class FestivalsPageModule {}
