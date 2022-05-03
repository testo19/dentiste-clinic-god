import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersManageComponent } from './components/users-manage/users-manage.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
  },
  { path: 'users-manage', component: UsersManageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
