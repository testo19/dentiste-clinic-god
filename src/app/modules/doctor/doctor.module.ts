import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { CustomerFeedComponent } from './components/customer-feed/customer-feed.component';
import { CustomerHealComponent } from './components/customer-heal/customer-heal.component';


@NgModule({
  declarations: [
    CustomerFeedComponent,
    CustomerHealComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
