import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHistoriesComponent } from './components/customer-histories/customer-histories.component';
import { CustomerManageComponent } from './components/customer-manage/customer-manage.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { HomeComponent } from './components/home/home.component';
import { MeetManageComponent } from './components/meet-manage/meet-manage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'customer-histories', component: CustomerHistoriesComponent },
  { path: 'customer-manage', component: CustomerManageComponent },
  { path: 'customer-register', component: CustomerRegisterComponent },
  { path: 'meet-manage', component: MeetManageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptionRoutingModule {}
