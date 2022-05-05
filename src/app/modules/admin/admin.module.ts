import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersManageComponent } from './components/users-manage/users-manage.component';
import { UserRegisterComponent } from './components/users-register/user-register.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    UsersManageComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
