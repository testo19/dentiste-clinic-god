import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminGuard } from './guards/auth/admin.guard';
import { ReceptionGuard } from './guards/auth/reception.guard';
import { AdminModule } from './modules/admin/admin.module';
import { ReceptionModule } from './modules/reception/reception.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: ()=> AdminModule
  },
  {
    path: 'reception',
    canActivate: [ReceptionGuard],
    loadChildren: ()=> ReceptionModule
  },
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
