import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { CustomerManageComponent } from './components/customer-manage/customer-manage.component';
import { MeetManageComponent } from './components/meet-manage/meet-manage.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerHistoriesComponent } from './components/customer-histories/customer-histories.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';


@NgModule({
  declarations: [
    CustomerManageComponent,
    MeetManageComponent,
    HomeComponent,
    CustomerHistoriesComponent,
    CustomerRegisterComponent
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule
  ]
})
export class ReceptionModule { }
