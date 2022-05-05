import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersManageComponent } from './components/users-manage/users-manage.component';
import { UserRegisterComponent } from './components/users-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
  },
  { path: 'users-manage', component: UsersManageComponent },
  { path: 'users-register', component: UserRegisterComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
