import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LhomePageRoutingModule } from './lhome-routing.module';

import { LhomePage } from './lhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LhomePageRoutingModule
  ],
  declarations: [LhomePage]
})
export class LhomePageModule {}
